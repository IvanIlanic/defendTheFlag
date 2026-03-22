-- Populating database
CREATE DATABASE IF NOT EXISTS labdb;
USE labdb;

DROP TABLE IF EXISTS usertable;

CREATE TABLE usertable (
    uid INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    profileID VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    role VARCHAR(20) NOT NULL
);

INSERT INTO usertable (name, profileID, password, role) VALUES
('Alice Admin', '10', 'admin123', 'admin'),
('Bob User', '20', 'user123', 'user'),
('Charlie Employee', '30', 'charlie123', 'user');