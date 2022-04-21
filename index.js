// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

const generateReadMe = ({ username, name1, email, project, description, image, licenses, commands, tests, repo, repoLink, live }) =>
`# ${project}
## Description
###${description}
###${image}
## project location ##

> [repo link](${repoLink})

> [live link](${live}) 

# Table of contents

> Description

>Project Location

> Licenses

>Installation

>Contact

##licenses
${licenses}
## Installation
Commands needed to install dependancies: 
${commands}
Commands needed to run tests:
${tests}
Additonal instructions:
${repo}
## Contact
 ### ${name1}
### ${email}

>GitHub username: ${username}`

;




// TODO: Create an array of questions for user input
inquirer
 .prompt ([
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your name?',
        name: 'name1',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your project title?',
        name: 'project',
        
      },
      {
        type: 'input',
        message: 'Please write a short project description',
        name: 'description',
        
      },
      {
        type: 'input',
        message: 'Do you have a link to a picture or video for the application?',
        name: 'image',
        
      },
      {
        type: 'checkbox',
        message: 'What kind of license does your project have?',
        name: 'licenses',
        choices:[]
        
      },
      {
        type: 'input',
        message: 'What commands shoud I run to install dependencies?',
        name: 'commands',
        
      },
      {
        type: 'input',
        message: 'What command should I run for tests?',
        name: 'tests',
        
      },
      {
        type: 'input',
        message: 'What does your user need to know about using the repository?',
        name: 'repo',
        
      },
      {
        type: 'input',
        message: 'Enter repo link',
        name: 'repoLink',
        
      },
      {
        type: 'input',
        message: 'Enter live link',
        name: 'live',
        
      }
])

.then((answers) => {
   const readMeContent = generateReadMe(answers);

   fs.writeFile('readme.md', readMeContent, (err) =>
   err ? console.log(err) : console.log('Successfully created ReadMe.md!')
   );
  });

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();