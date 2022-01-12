const cm = require('inquirer')
require('console.table')
const mysql = require('mysql2')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'employee_db'
})

db.connect(function (err) {
    if (err) {
        console.log(err)
    }
})
//db.query('SELECT * FROM department', function(err, data){
// if (err) console.log(err)
//console.log(data)
//})
function intialprompt() {
    cm
        .prompt([
            {
                type: 'list',
                name: 'option',
                choices: ['view department', 'view role', 'view title', 'view title by role', 'view salary by role', 'view employee', 'view first name by employee', 'view last name by employee'],
                message: 'what would you like to do?'
            }
            /* Pass your questions in here */
        ])
        .then((answers) => {
            console.log(answers)
            switch (answers.option) {
                case "view department":
                    
                    break;
            
                
                case "view role":

                    break;

                    

                case "view title":

                    break;

                    
                

                     
                case "view salary by role":
                     
                        break;

                     

                case "view employee":
                     
                            break;
    
                         
                case "view first name by employee":
                     
                                break;
        
                              
                case "view last name by employee":
                     
                        break;

                      default:
                         break;

                      
            }
            // Use user feedback for... whatever!!
        })
        .then((res) => {
            var answer = res.choice;
            console.log(answer);
            if (answer === "view employee") {
              connection.query("SELECT * FROM employee", function (err, res) {
                if (err) console.log(err);
                console.table(res);
              }); 
            }
            if (answer === "view first name  by employee ") {
                connection.query("SELECT * FROM employee", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                }); 
              }
              if (answer === "view last name by employee ") {
                connection.query("SELECT * FROM employee", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                }); 
              } 
              if (answer === "view department") {
                connection.query("SELECT * FROM department", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                }); 
              }
              if (answer === "view role") {
                connection.query("SELECT * FROM role", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                }); 
              } 
              if (answer === "view title") {
                connection.query("SELECT * FROM role", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                }); 
            }
            if (answer === "view salary") {
                connection.query("SELECT * FROM role", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                }); 
            }
        });
            
intialprompt() }
