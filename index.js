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
                choices: ['View employee', 'View department', 'Add employee','Update employee role', 'View role', 'Add role', 'Add department' ],
                message: 'what would you like to do?'
              
            }
            /* Pass your questions in here */
        ])
        .then((answers) => {
            console.log(answers)
            switch (answers.option) {
                case "View employee":
                    viewemployee();

                    
                    break;
            
                case "View department":
                    viewdepartment();

                    break;
                
                case "Add employee":
                
                    break;

                     
                
                       
                        /* Pass your questions in here */

                     
                        break;

                     
                case "Update employee role":
                    //updateemployeerole();
                     
                            break;
    
                         
                case "View role":
                    viewrole();
                     
                                break;
        
                              
                case "Add role":
                    //addrole();
                     
                        break;

                case "Remove role":
                    //removerole();
                     
                            break;

                case "Add department":
                   cm.prompt([
                        {
                           
                            name: 'name',
                            message: 'what is the department name?'
                          
                        }
                        /* Pass your questions in here */
                    ]) .then(res =>{
                        let name = res
                        addepartment(name)
                    })
                    
                     
                                    break;
                
    
                      default:
                         break;

                      
            }
            // Use user feedback for... whatever!!
        })
    }
        
              
              function viewemployee () {
                db.query("SELECT * FROM employee", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                  intialprompt() 
                }); 
              } 
              function viewdepartment () {
                db.query("SELECT * FROM department", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                  intialprompt() 
                }); 
              }
              function viewrole () {
                db.query("SELECT * FROM role", function (err, res) {
                  if (err) console.log(err);
                  console.table(res);
                  intialprompt() 
                }); 
              } 
            function addepartment(department) {
                db.query('INSERT INTO department SET ?', department, function (err) {
                    if (err) console.log(err);
                  console.log('department added');
                  intialprompt()  
                })
            }
            function addemployee(employee) {
            db.query('INSERT INTO employee SET ?', employee, function (err) {
                if (err) console.log(err);
              console.log('employee added');
              intialprompt()  
            })
        }
intialprompt() 
