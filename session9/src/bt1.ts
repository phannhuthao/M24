<<<<<<< HEAD
type ShippingCosts = {
    VN: number;
    US: number;
    UK: number;
};

const shippingCosts: ShippingCosts = {
    VN: 10000,
    US: 20000,
    UK: 30000,
};

function getShippingCost(country: keyof ShippingCosts): number {
    return shippingCosts[country];
}

console.log(getShippingCost("VN")); 
console.log(getShippingCost("US")); 
console.log(getShippingCost("UK")); 
=======
type ShippingCosts = {
    VN: number;
    US: number;
    UK: number;
};

const shippingCosts: ShippingCosts = {
    VN: 10000,
    US: 20000,
    UK: 30000,
};

function getShippingCost(country: keyof ShippingCosts): number {
    return shippingCosts[country];
}

console.log(getShippingCost("VN")); 
console.log(getShippingCost("US")); 
console.log(getShippingCost("UK")); 
>>>>>>> ddc9f7953e0b57e05018e1934c71335f98779180
