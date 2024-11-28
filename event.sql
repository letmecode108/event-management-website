CREATE DATABASE eventDB;

USE eventDB;

CREATE TABLE registrations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    regNumber VARCHAR(50),
    gender VARCHAR(10),
    phone VARCHAR(15),
    payment VARCHAR(50),
    screenshot VARCHAR(255)
);
