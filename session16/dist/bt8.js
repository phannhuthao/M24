"use strict";
let object1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4],
    }
};
let object2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9,
        },
    },
    g: 10
};
const HopNhatCacDoiTuong = (a, b) => {
    const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);
    const merge = (obj1, obj2) => {
        let result = Object.assign({}, obj1);
        for (const key in obj2) {
            if (isObject(obj2[key])) {
                if (obj1[key]) {
                    result[key] = merge(obj1[key], obj2[key]);
                }
                else {
                    result[key] = obj2[key];
                }
            }
            else {
                result[key] = obj2[key];
            }
        }
        return result;
    };
    return merge(a, b);
};
let result = HopNhatCacDoiTuong(object1, object2);
console.log(result);
