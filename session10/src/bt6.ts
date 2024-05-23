<<<<<<< HEAD
class Song {
    public readonly id1: number;
    name1 : string;
    lenght1: string;
    constructor(id1: number, name1: string, lenght1: string) {
        this.id1 = id1;
        this.name1 = name1;
        this.lenght1 = lenght1;
    }

    getName(): string {
        return this.name1;
    }

    setName(name1: string): void {
        this.name1 = name1;
    }

    getLength(): string {
        return this.lenght1;
    }
    
    setLenght(lenght1 : string): void {
        this.lenght1 = lenght1;
    } 
}
const song = new Song(1,"NOLOVENOLIFE", "2:20");

console.log(`Song Name: ${song.getName()}`);
console.log(`Song Length: ${song.getLength()}`);

song.setName("Tao vẫn là tao");
song.setLenght("2:00");

console.log(`Updated Song Name: ${song.getName()}`);
console.log(`Updated Song Length: ${song.getLength()}`);



=======
class Song {
    public readonly id1: number;
    name1 : string;
    lenght1: string;
    constructor(id1: number, name1: string, lenght1: string) {
        this.id1 = id1;
        this.name1 = name1;
        this.lenght1 = lenght1;
    }

    getName(): string {
        return this.name1;
    }

    setName(name1: string): void {
        this.name1 = name1;
    }

    getLength(): string {
        return this.lenght1;
    }
    
    setLenght(lenght1 : string): void {
        this.lenght1 = lenght1;
    } 
}
const song = new Song(1,"NOLOVENOLIFE", "2:20");

console.log(`Song Name: ${song.getName()}`);
console.log(`Song Length: ${song.getLength()}`);

song.setName("Tao vẫn là tao");
song.setLenght("2:00");

console.log(`Updated Song Name: ${song.getName()}`);
console.log(`Updated Song Length: ${song.getLength()}`);



>>>>>>> 89e7efa79455b4c71d25007b76d142eff3290041
