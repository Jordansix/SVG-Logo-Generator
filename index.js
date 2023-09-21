const inquirer = require ('inquirer');
const generateLogo = require ('./lib/generateLogo.js');

function main () {
    inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to the characters:', 
        },
        {
            name: 'textColor',
            message: 'Enter textColor',
        },
        {
            name: 'shape',
            type: 'list',
            message: 'choose a shape',
            choices: ['Circle','Square','Triangle',]
        },
        {
            name: 'shapeColor',
            message: 'Enter shape color:'
        }
    ])

    .then(answer => {
        generateLogo(answer.text, answer.textColor, answer.shape, answer.shapeColor);

        console.log("Generate logo.svg");
    })

    .catch(error => {
        console.log('Error:', error)
    });
}

main();