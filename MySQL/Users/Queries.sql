insert into users (first_name, last_name, email, created_at, updated_at)
values ("Hanei", "Islim", "hanei_islim@hotmail.com",now(), now()), 
("Abood", "Masri", "aboodM@hotmail.com", now(), now()),
("Sabri", "Shuqo", "sabri2000@hotmail.com", now(), now());

Select * from users;

SELECT * from users
WHERE email = "hanei_islim@hotmail.com";

SELECT * from users
WHERE id = 3;

UPDATE users SET
last_name = "Pancakes"
WHERE users.id = 3;

DELETE from users
WHERE users.id = 2;

SELECT * from users
ORDER BY first_name DESC; 
