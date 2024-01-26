create table books (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    category VARCHAR(255) NOT NULL,
    stock INT NOT NULL
) ENGINE=InnoDB;

SELECT * FROM books;