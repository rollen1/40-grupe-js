console.clear();

class Pet {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    voice() {
        return `Hi, my name is ${this.name} and my color is ${this.color}`;
    }
}

class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au au';
    }

    voice() {
        return `${this.name}: $`
    }

}

class Cat extends Pet {

}


const gyvunas = new Dog('Rezusas', 'raudona');
console.log(gyvunas);
