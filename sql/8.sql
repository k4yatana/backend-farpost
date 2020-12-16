CREATE OR REPLACE FUNCTION get_all_roads() RETURNS void AS
$BODY$
DECLARE
    city addr.cities%rowtype;
	second_city addr.cities%rowtype;
BEGIN
    FOR city IN
        SELECT * FROM addr.cities
    LOOP
		FOR second_city IN SELECT * FROM addr.cities WHERE id NOT BETWEEN city.id AND 5
		LOOP
			INSERT INTO addr.roads (the_geom, length, name)
			VALUES
			  (
				  ST_MakeLine(city.the_geom, second_city.the_geom),
				  ST_DistanceSphere(ST_Transform(city.the_geom, 4326),
				  ST_Transform(second_city.the_geom, 4326)), CONCAT(city.name, ' – ', second_city.name)
			  );
		END LOOP;
    END LOOP;
    RETURN;
END
$BODY$
LANGUAGE plpgsql;

SELECT * FROM get_all_roads();