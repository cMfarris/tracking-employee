INSERT INTO department (id, name)
VALUES 
  (1, "Cashier"),
  (2,"Toys"),
  (3,"Baby"),
  (4,"Homegoods"),
  (5, "Grocery"),
  (6, "Clothing");

  INSERT INTO role (id, title, salary, department_id)
VALUES 
  (1, "Store Manager", 21.50, 1),
  (2,"Department Manager", 17.50, 1),
  (3,"Cashier", 11.00, 1),
  (4,"Baker", 15.00, 5),
  (5, "Stocker", 12.50, 4),
  (6, "Merchandise", 11.00, 6);

  INSERT INTO role (id, first_name, last_name, role_id, manager_id)
VALUES 
  (1,"Bob", "Franklin", 1),
  (2,"Ashley", "Lopez", 2, 1),
  (3,"Kayla", "Benjamin",3, 2),
  (4,"Shikelia", "Hagens",4 , 2),
  (5,"Khiry", "Mitchell", 5, 2),
  (6,"Kiara", "Robinson",6, 2);