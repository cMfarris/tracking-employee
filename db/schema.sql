DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INTEGER NOT NULL,
  name VARCHAR(30)
);

CREATE TABLE role (
  id INTEGER NOT NULL,
  title VARCHAR(30),
  salary DECIMAL(10,2),
  department_id INTEGER NOT NULL
);

CREATE TABLE employee (
  id INTEGER NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INTEGER,
  manager_id INTEGER NOT NULL 
);

-- CREATE TABLE categories(
--   id INTEGER NOT NULL,
--   category_name VARCHAR(30),
--   category_description TEXT
-- );