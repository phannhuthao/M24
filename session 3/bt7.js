function mergeObjects(...objects) {
    return objects.reduce((merged, current) => {
        return { ...merged, ...current };
    }, {});
}

// Ví dụ sử dụng hàm
const obj1 = { id: 1, name: 'Hào', point: 8, age: 19 };
const obj2 = { id: 2, name: 'Hạ' , point: 9 , size: 33};
const obj3 = { id: 3, name: 'Diệp',point: 10, size: 32  };

const mergedObject = mergeObjects(obj1, obj2, obj3);
console.log(mergedObject);
