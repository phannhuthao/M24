class Animal {
    numLegs: number;
    hasMask: string;
    nameTag: string;

    constructor(numLegs: number = 4, hasMask: string = "No", nameTag: string = "Animal") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}

class BeeKeeper {
    numLegs: number;
    hasMask: string;
    nameTag: string;

    constructor(numLegs: number = 2, hasMask: string = "Yes", nameTag: string = "BeeKeeper") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}

class ZooKeeper {
    numLegs: number;
    hasMask: string;
    nameTag: string;

    constructor(numLegs: number = 2, hasMask: string = "No", nameTag: string = "ZooKeeper") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}

class Bee {
    numLegs: number;
    hasMask: string;
    nameTag: string;

    constructor(numLegs: number = 6, hasMask: string = "No", nameTag: string = "Bee") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}

class Lion {
    numLegs: number;
    hasMask: string;
    nameTag: string;

    constructor(numLegs: number = 4, hasMask: string = "No", nameTag: string = "Lion") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}
function createInstance<T>(DK: new () => T): T {
    return new DK();
}

function logCreation(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Creating instance of: ${args[0].name}`);
        const result = originalMethod.apply(this, args);
        console.log(`Instance created: ${JSON.stringify(result)}`);
        return result;
    };

    return descriptor;
}

class InstanceFactory {
    @logCreation
    static createInstance<T>(DK: new () => T): T {
        return new DK();
    }
}

const animal = InstanceFactory.createInstance(Animal);
console.log(animal);

const beeKeeper = InstanceFactory.createInstance(BeeKeeper);
console.log(beeKeeper);

const zooKeeper = InstanceFactory.createInstance(ZooKeeper);
console.log(zooKeeper);

const bee = InstanceFactory.createInstance(Bee);
console.log(bee);

const lion = InstanceFactory.createInstance(Lion);
console.log(lion);

