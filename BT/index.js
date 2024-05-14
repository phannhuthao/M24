// bài tập 8 session 1

function insertArray(array1, array2, index) {
    // hàm khác
    array1.splice(index,0,...array2);

    console.log(array1);
    return array1;
}
console.log(insertArray([1,2,3],[4,5,6],1));

// Bài tập 11 session 1 chức năng giỏ hàng.

const product = [
    {id: 1, name: 'Xe máy', price: 890, quantity: 5},
    {id: 2, name: 'Xe Hơi', price: 2500, quantity: 5},
    {id: 3, name: 'Xe đạp', price: 560, quantity: 34},
]

// lưu trữ sản phẩm và 
const cart = [
    {pro: {id:1, name: 'Xe máy', price: 890, quantity: 5}, quantity: 2},
    {pro: {id:3, name: 'Xe đạp', price: 560, quantity: 34}, quantity: 15}
]


// hàm thay đổi số lượng có 3 tham số là id sản phẩm
function changQuantity(proId, newQuantity, products) {
    let index = indexOfproductCart(proId);
    if (index != -1 ) {
        // tìm thấy và có thể thay đổi số lượng
        cart[index].quantity = newQuantity; // số lượng mới được cập nhật
        // cập nhật lại số lượng trong kho
        let indexPro = indexOfproductCart(proId);
        products[indexPro].stock = products[indexPro].stock - newQuantity + oldQuantity;
    }
}

function indexOfproductCart (proId) {
    // chuyển đổi cart Item thành proId
    return cart.findIndex((cartItem) => {
        cartItem.pro.id == proId
    })
}

function indexOfProductInProducts (proId) {
    return 
}

// Session 2:
// Some (), Every (), Sort()

// Some () : Bài toán xem có ít nhất 1 phần tử thỏa mãn điều kiện nào đó
// bài toán: kiểm tra trong mảng có số nào chia hết cho 3 không
let arr = [ 1,2,3,4,5,6,7,8,9,10,11,12,13];
let check = arr.some((element) => element%3==0)
console.log(check);

// Every () : kiểm tra tất cả các phần tử có thỏa mãn điều kiện nào đó không
// bài toán : tất cả phẩn tử tỏng mảng có chia hết cho 3 không
let checkDiv3 = arr.every((element) => element%3);
console.log(checkDiv3);

// sort
console.log(arr.sort());

let strings = ["hao", "anh", "nam"]

console.log(strings.sort((a,b) => {
    if (a > b) {
         return 1;
    } else if (a < b) {
        return -1;
    }
}))