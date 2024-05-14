let account = [
    {
        userName: 'Phan Nhựt Hào',
        password: '123456',
    },

    {
        userName: 'Nguyễn Thanh Hạ',
        password: '123456',
    },

    {
        userName: 'Nguyễn Ngọc Diệp',
        password: '123456',
    },

    {
        userName: 'DNHKMHIO',
        password: '12 3 456',
    },
]


// account.map((account) => {
//     if (account != ' ') {
//         console.log("Tài khoản có mật khẩu dấu cách là: ", account)
//     } else if (account) {
//         console.log("Các tài khoản hợp lệ", account)
//     }
// })

let invalidAccounts = account.filter((acc) => acc.password.includes(' '));

if (invalidAccounts.length > 0) {
    console.log("Tài khoản có mật khẩu chứa dấu cách:");
    invalidAccounts.forEach((acc) => {
        console.log("Tên người dùng:", acc.userName);
    });
} else {
    console.log("Các tài khoản đều hợp lệ");
}