CREATE DATABASE IF NOT EXISTS labdb;
USE labdb;
CREATE TABLE usertable (
id INT AUTO_INCREMENT PRIMARY KEY,
profileID VARCHAR(50),
password VARCHAR(50)
);
INSERT INTO usertable (profileID,password) VALUES ('10','admin123');
