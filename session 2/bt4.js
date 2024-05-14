function allNumberSDivisiblebys (n, a) {
    for (let i = 0; i < n.length; i++ ) {
        if (n[i] % a !== 0) {
            return false;
        }
    }
    return true;
}

console.log(allNumberSDivisiblebys([2,4,6,8,10], 2))
console.log(allNumberSDivisiblebys([2,4,6,8,11], 2))