create table sample (
    id varchar(100) not null primary key, 
    name varchar(100) not null
)

create table customers (
    id varchar(100) not null primary key, 
    name varchar(100) not null,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    constraint constraint_email_unique UNIQUE (email), 
    constraint constraint_phone_unique UNIQUE (phone)
) engine innodb;

SELECT * FROM customers;

SHOW TABLES;

DESC customers;