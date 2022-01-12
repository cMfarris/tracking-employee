DROP DATABASE employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department (
    id int NOT NULL AUTO_INCREMENT, 
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    title VARCHAR(30),
    salary DECIMAL,
   department_id INT,
     FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY(id),
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manger_id INT,
    FOREIGN KEY(role_id)REFERENCES role(id),
    FOREIGN KEY(manger_id)REFERENCES employee(id)
);
INSERT INTO department (name) values('Tom.B'), ('Sara.C'), ('Tommy.L'), ('Lauren.F'), ('Brianna.T'),('David.W'), ('Rhonda.H');

INSERT INTO role (title, salary) values('Sales', 10.00), ('Account', 15.000), ('Stocker', 10.00), ('Cahier', 12.00), ('Manger', 20.00);

INSERT INTO employee (first_name, last_name) values ('Celeste', 'Farris'), ('Luke', 'Bryan'), ('Brianna', 'Logan'), ('Justin', 'Kerosetz'), ('Tom', 'Cruz');

