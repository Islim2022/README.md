INSERT INTO dojos (name)
VALUES ("Anime"), ("Online"), ("New-york");

SELECT * from dojos;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM dojos;

INSERT INTO dojos (name)
VALUES ("Anime"), ("Online"), ("New-york");

INSERT INTO ninja (first_name,last_name,age,dojo_id)
VALUES ("Hanei", "Islim", 23, 19), ("Basem", "Zayed", 30, 19), ("Sami", "Masri", 25, 19);

INSERT INTO ninja (first_name, last_name, age, dojo_id)
VALUES ("Ali", "Islim", 28, 20), ("Kareem", "Zayed", 20, 20), ("Mo", "Masri", 25, 20);

INSERT INTO ninja (first_name, last_name, age, dojo_id)
VALUES ("Noor", "Islim", 24, 21), ("Fares", "Zayed", 21, 21), ("Saif", "Masri", 19, 21);

Select * from ninja
WHERE dojo_id = 19;

SELECT * from ninja
WHERE dojo_id = 21;

SELECT * from dojos
WHERE id = 21; 



