let FirstName: string = "Hào";
let LastName: string = "phan";
let FullName: string;


function capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


FirstName = capitalizeFirstLetter(FirstName);
LastName = capitalizeFirstLetter(LastName);


FullName = `${LastName} ${FirstName}`;

console.log("Tên:", FullName);
