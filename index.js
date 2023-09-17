const inquire = require ('inquire');
const generatorLogo = require ('./lib/generateLogo.js');

function main () {
    inquire.promt([
        {
            name: 'text',
            message: 'Enter up to the characters:', 
        },
        {
            name: 'text color',
            message: 'Enter text color',
        },
        {
            name: 'shape',
            type: 'list',
            message: 'choose a shape',
            choices: ['circle','square','triangle',]
        },
        {
            name: 'shapecolor',
            message: 'Enter shape color:'
        }
    ])

    .then(answer =>) {
        generateLogo(answer.text, answer.textColor, answer.shape, answer.shapeColor);
        
    }
}