//Criar uma classe que represente heróis de uma aventura e mostre seus ataques com tipos de armas de cada classe

class heroes{
    constructor(name, age, classes){
    this.name = name
    this.age = age
    this.classes = classes
    
    }

    attack(){
        switch (this.classes) {
          case 'Warrior':
            console.log(`The ${this.classes} attacked using a sword.`);
            break;
          case 'Mage':
            console.log(`The ${this.classes} attacked using magic.`);
            break;
          case 'Ninja':
            console.log(`The ${this.classes} attacked using stealth and agility.`);
            break;
          case 'Monk':
            console.log(`The ${this.classes} attacked using martial arts techniques.`);
            break;
          default:
            console.log(`Cannot perform an attack.`);
            break;
    
        }
    }
}

const Hero = new heroes('Holdrick', 40, 'Warrior')
const Hero2 = new heroes('Gandalf', 84, 'Mage')
const Hero3 = new heroes ('Shadows', 40, 'Ninja')
const Hero4 = new heroes ('Yu Gan', 70, 'Monk')


Hero.attack(); // Output: "The Warrior attacked using a sword."
Hero2.attack(); // Output: "The Mage attacked using magic."
Hero3.attack(); // Output: "The Ninja attacked using stealth and agility."
Hero4.attack(); // Output: "The Monk attacked using martial arts techniques."

