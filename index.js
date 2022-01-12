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
            
                default:
                    break;
                case "view role":

                    break;

                    default:
                        break;

                case "view title":

                    break;

                    default:
                        break;
                case "view title by role":

                     break;

                     default:
                         break;
                case "view salary by role":
                     
                        break;

                      default:
                         break;

                case "view employee":
                     
                            break;
    
                          default:
                             break;
                case "view first name by employee":
                     
                                break;
        
                              default:
                                 break;
                case "view last name by employee":
                     
                        break;

                      default:
                         break;

                      
            }
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}
intialprompt()