/** Definition of an animals and it's abilities with a constructor */
class Animal {

    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

//creates div-element with onclick
    getHTMLElement() {
        const divElement = document.createElement("div");
        //divElement.innerText = `${this.type}`
        divElement.className = "circular-button";
        divElement.style.backgroundImage = `url('${this.getImageSrc()}')`;
        divElement.onclick = this.playSound.bind(this);
        const divElement2 = document.createElement("div");
        divElement.appendChild(divElement2);
        divElement2.className = "texten";
        divElement2.innerText = `${this.name} is a ${this.type} that is ${this.age} years old.`
        return divElement;
    }

    displayInfo() {
        console.log(`${this.name} is a ${this.type} that is ${this.age} years old.`);
    }

}

/**class Dog */
class Dog extends Animal {/*gets the information from class Animal when using "extends". 
If you dont need to define, for example new abilities, you don't need a new constructor*/

    getImageSrc() {
        return "./images/dog.jpg";
    }
  playSound() {
      SoundManager.play("./sounds/dog.mp3")
  }

}

/** class Cat */

class Cat extends Animal {// gets the information from class Animal when using "extends"

    getImageSrc() {
        return "./images/cat.jpg";
    }
    playSound() {
      SoundManager.play("./sounds/cat.mp3")
  }

}

/**class Cow */
class Cow extends Animal { /* add gender and console log it, use the constructor*/

    constructor(type, name, age, gender){
        super(type, name, age)
        this.gender = gender;
    }

    displayInfo(){
        console.log(`${this.name} is a ${this.type} who is ${this.age}. ${this.name} is a ${this.gender}`);
    }

    getImageSrc() {
        return "./images/cow.jpg";
    }
    playSound() {
      SoundManager.play("./sounds/cow.mp3")
  }

}