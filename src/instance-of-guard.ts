{
    // Instance of guard
    class Animal {
        name: string;
        species: string;

        constructor (name: string, species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`${this.name} is making sound`);;
        }
    }


    
    // Make a new class for Dog using Animal class
    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }

        makeBark(){
            console.log("Dog is barking");
        }
    }


    // Make a new class for cat using Animal class
    class Cat extends Animal {
        constructor(name:string, species: string){
            super(name, species)
        }

        makeMeaw(){
            console.log("Cat is Meawing");
        }
    }


    // Smart way to handle function
    const isDog = (animal: Animal): animal is Dog =>{
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat =>{
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) =>{
        if(isDog(animal)){
            animal.makeBark()
        }
        else if(isCat(animal)){
            animal.makeMeaw()
        }else{
        animal.makeSound();
        }
    }

    const dog = new Dog("Kutta", "dog");
    const cat = new Cat("cutie", "cat");

getAnimal(dog)

    // 
}