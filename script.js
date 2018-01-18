/* RUN PROGRAM */
const container = document.createElement("div");
container.className = "fullscreen-container";


/* Add a dog */
var dog = new Dog("dog", "Elvis", 8);
dog.displayInfo();
container.appendChild(dog.getHTMLElement());

/* Add a cat */
var cat = new Cat("cat", "Winkey", 2);
cat.displayInfo();
container.appendChild(cat.getHTMLElement());

/* Add a cow */
var cow = new Cow("cow", "Maria", 4, "girl");
cow.displayInfo();
container.appendChild(cow.getHTMLElement());

/* Add container to body */
document.body.appendChild(container);