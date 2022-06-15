console.clear();

class Dog {
    constructor(name) {
        this.name = name;
        this.boneCount = 0;
        this.sound = "Au au!";
    }

    sayHi() {
        return (`${this.name}: Labas!`);
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return (`${this.name}: Iki ${otherName}!`);
    }

    voice() {
        const sound = `${this.sound}`
    }

    changeVoice(sound) {
        sound = `${this.sound}`
    }

    newBone() {
        bone = '🦴'
    }
}

const rex = new Dog('Rex');
console.log(rex.sayHi());
console.log(rex.sayGoodbye('Maryte'));

class Cat {

    constructor(name) {
        this.name = name;
        this.mouseCount = 0;
    }

    sayHi() {
        return (`${this.name}: Labas!`);
    }

    sayGoodbye(otherName = '') {
        return (`${this.name}: Iki ${otherName}!`);
    }

    newMouse() {
        return `${this.name}`
    }
}

const rainis = new Cat('Rainis');
console.log(rainis);