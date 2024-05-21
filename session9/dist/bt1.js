"use strict";
const shippingCosts = {
    VN: 10000,
    US: 20000,
    UK: 30000,
};
function getShippingCost(country) {
    return shippingCosts[country];
}
console.log(getShippingCost("VN"));
console.log(getShippingCost("US"));
console.log(getShippingCost("UK"));
