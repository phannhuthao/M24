let book = [
    {
        id: 1,
        name: "Ohayo",
    },
    {
        id: 2,
        name: "Cần gì nói đâu em ơi",
    },
    {
        id: 3,
        name: "Chạy ngay đi",
    },
];

let searchId = 2; 

let foundBook = book.find((book) => book.id === searchId);

if (foundBook) {
    console.log("ID:", foundBook.id, "- Tên sách:", foundBook.name);
} else {
    console.log("Không có kết quả tìm kiếm.");
}
