function hasUppercase(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== str[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

console.log(hasUppercase("Hello"));  
console.log(hasUppercase("hello"))