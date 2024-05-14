let student =[
    {
        id: 1,
        name: "Nguyễn Thanh Hạ",
        age: 19,
    },

    {
        id: 2,
        name: "Nguyễn Ngọc Diệp",
        age: 18,
    },

    {
        id: 3,
        name: "Phan Nhựt Hào",
        age: 19,
    }
]
//C1 
student.forEach((student) => {
    console.log(student.name)
})

// C2
console.log(student.map(element => element.name))