create table comments (
    id INT not NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),
    constraint comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) engine innoDb;

show tables;

