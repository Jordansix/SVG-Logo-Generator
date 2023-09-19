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
        this.color = color:
    } 

    draw(svg) {
        svg += `<rect x="50" y="35" width"100" height"100" fill="${this.color}" />`;
        return svg;
    }
}

function generatorLogo(text, textColor, shapeType, shapeColor) {
    const width = 300;
    const height = 200;

    
}
