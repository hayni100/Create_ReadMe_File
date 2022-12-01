// TODO: Include packages needed for this application
const inquirer = require('inquirer');
 const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'What is the title of your project?',
            name: 'title'
        },

        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description'
        },

        {
            type: 'input',
            message: 'What is the installation of your project?',
            name: 'installation'
        },

        {
            type: 'input',
            message: 'What is the usage of your project?',
            name: 'usage'
        },

        {
            type: 'list',
            message: 'What is the license for your project?',
            name: 'license',
            choices: ['MIT', 'Apache 2.0', 'ISC', 'BSD']
        },

        {
            type: 'input',
            message: 'What are the contribution guidelines of your project?',
            name: 'contribution'
        },

        {
            type: 'input',
            message: 'What are the test instructions of your project?',
            name: 'test'
        },

        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },

        {
            type: 'input',
            message: 'What is your github username?',
            name: 'github'
        },
]
    // .then(function(answers) {
    //     console.log(answers.title);
    //     writeToFile(answers); 
    // });

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
   
  
    
return fs.writeFileSync(path.join(process.cwd(), fileName),answers)
}
      
      // file written successfully
    
// // TODO: Create a function to initialize app
function init() { 

inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('generating README');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses}));
});
}
// // Function call to initialize app
init();
