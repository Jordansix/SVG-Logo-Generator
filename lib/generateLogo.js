const fs = require ('fs');

class Circle {
    constructor(color) {
        this.color = color 
    }

    draw(svg) {
        svg += `<circle cx="100" cy="85 r="50" fill="${this.color}" />`;
        return svg;
    }
}

class Triangle {
    constructor(color) {
        this.color = color; 
    }

    draw(svg) {
        svg += `<polygon points="100,20 150,120 50,120" fill="${this.color}" />`;
        return svg;
    }
}

class Square {
    constructor(color) {
        this.color = color;
    } 

    draw(svg) {
        svg += `<rect x="50" y="35" width"100" height"100" fill="${this.color}" />`;
        return svg;
    }
}

function generatorLogo(text, textColor, shapeType, shapeColor) {
    const width = 300;
    const height = 200;

    let shape; 
    switch (shapeType) {
        case 'Circle':
            shape = new Circle(shapeColor);
            break;
            case 'Triangle':
                shape = new Triangle(shapeColor);
                break;
                case 'Square':
                    shape = new Square(shapeColor);
                    break;
                defualt: 
                    getConsoleOutput.log("invalid shape choice");
            }

            svg = shape.draw(svg);
            svg += `<text x="85" y="90"fill="${textColor}">${text}</text><svg>`;

            fs.writeFileSync('logo.svg', svg);
}

module.export = generateLogo;
