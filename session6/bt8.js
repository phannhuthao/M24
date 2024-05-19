"use strict";
let FirstName = "Hào";
let LastName = "phan";
let FullName;
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
FirstName = capitalizeFirstLetter(FirstName);
LastName = capitalizeFirstLetter(LastName);
FullName = `${LastName} ${FirstName}`;
console.log("Tên:", FullName);
