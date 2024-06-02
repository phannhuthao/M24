"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Animal {
    constructor(numLegs = 4, hasMask = "No", nameTag = "Animal") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}
class BeeKeeper {
    constructor(numLegs = 2, hasMask = "Yes", nameTag = "BeeKeeper") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}
class ZooKeeper {
    constructor(numLegs = 2, hasMask = "No", nameTag = "ZooKeeper") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}
class Bee {
    constructor(numLegs = 6, hasMask = "No", nameTag = "Bee") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}
class Lion {
    constructor(numLegs = 4, hasMask = "No", nameTag = "Lion") {
        this.numLegs = numLegs;
        this.hasMask = hasMask;
        this.nameTag = nameTag;
    }
}
function createInstance(DK) {
    return new DK();
}
function logCreation(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Creating instance of: ${args[0].name}`);
        const result = originalMethod.apply(this, args);
        console.log(`Instance created: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
class InstanceFactory {
    static createInstance(DK) {
        return new DK();
    }
}
__decorate([
    logCreation
], InstanceFactory, "createInstance", null);
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
