INSERT INTO addr.cities (name, the_geom)
VALUES 
  ('Магадан', ST_Transform(ST_GeometryFromText('POINT(150.80611 59.56446)', 4326), 3857)),
  ('Санкт-Петербург', ST_Transform(ST_GeometryFromText('POINT(30.32740 59.92786)', 4326), 3857)),
  ('Новосибирск', ST_Transform(ST_GeometryFromText('POINT(82.92348 55.03020)', 4326), 3857));