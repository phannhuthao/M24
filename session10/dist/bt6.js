"use strict";
class Song {
    constructor(id1, name1, lenght1) {
        this.id1 = id1;
        this.name1 = name1;
        this.lenght1 = lenght1;
    }
    getName() {
        return this.name1;
    }
    setName(name1) {
        this.name1 = name1;
    }
    getLength() {
        return this.lenght1;
    }
    setLenght(lenght1) {
        this.lenght1 = lenght1;
    }
}
const song = new Song(1, "NOLOVENOLIFE", "2:20");
console.log(`Song Name: ${song.getName()}`);
console.log(`Song Length: ${song.getLength()}`);
song.setName("Tao vẫn là tao");
song.setLenght("2:00");
console.log(`Updated Song Name: ${song.getName()}`);
console.log(`Updated Song Length: ${song.getLength()}`);
