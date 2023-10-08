
class Key {
    private signature: number; 

    constructor() {
        this.signature = Math.random();
    }

    getSignature():number {
        return this.signature;
    }

}

class Person extends Key{
    private key: Key;
    
    constructor(key: Key) {
        super()
        this.key = key;
    }

    getKey(): Key {
        return this.key;
    }
}


abstract class House  {
    public door: boolean = false;
    public key: Key;
    public tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    public comeIn(person: Person):void {
        if (this.door) {
            this.tenants.push(person);
        } 
    } 

    abstract openDoor(keyForOpen: Key): void;
}

class MyHouse extends House {
    constructor(key: Key) {
        super(key);
    }

    public openDoor(keyForOpen: Key): void {
        if (keyForOpen.getSignature() === this.key.getSignature()) {
            this.door = true
        }
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};