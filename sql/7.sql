CREATE TABLE addr.roads
(
    id serial NOT NULL PRIMARY KEY,
    the_geom geometry(LineString, 3857) NOT NULL,
	length integer NOT NULL,
    name character varying(255) NOT NULL UNIQUE
);
COMMENT ON TABLE addr.roads IS 'Дороги';
COMMENT ON COLUMN addr.roads.length IS 'Длина в метрах';
COMMENT ON COLUMN addr.roads.name IS 'Города';