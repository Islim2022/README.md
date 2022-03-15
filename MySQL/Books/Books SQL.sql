insert into books.authors (name)
values ("Hanei Islim"),("Emily Dickinson"),("FYodor Dostoevsky"),("William Shakespeare"),("Lau Tzu");

insert into books.books (title, num_of_pages)
VALUES ("C Sharp", 200), ("Java", 200), ("Python", 200), ("PHP", 200), ("Ruby", 200);

UPDATE books.books SET 
title = "C#"
WHERE id = 1;

UPDATE books.authors SET 
name = "BILL Shakespeare"
WHERE id =4;

INSERT INTO books.favorite_books (author_id, book_id)
VALUES (1,1),(1,2);
INSERT INTO books.favorite_books (author_id, book_id)
VALUES (2,1),(2,2),(2,3);
INSERT INTO books.favorite_books (author_id, book_id)
VALUES (3,1),(3,2),(3,3),(3,4);
INSERT INTO books.favorite_books (author_id, book_id)
VALUES (4,1),(4,2),(4,3),(4,4),(4,5);

SELECT * FROM books.books 
JOIN books.favorite_books on books.books.id = books.favorite_books.book_id
JOIN books.authors on books.authors.id = books.favorite_books.author_id
WHERE books.id = 3;

DELETE FROM books.favorite_books
WHERE book_id = 3
AND author_id = 2;

INSERT INTO books.favorite_books (author_id, book_id)
VALUES (5,2);

SELECT * FROM books.books
JOIN books.favorite_books on books.books.id = books.favorite_books.book_id
JOIN books.authors on books.authors.id = books.favorite_books.author_id
WHERE authors.id = 3;

SELECT * FROM books.authors
JOIN books.favorite_books on books.authors.id = books.favorite_books.author_id
JOIN books.books on books.books.id = books.favorite_books.book_id
WHERE books.id = 5;


