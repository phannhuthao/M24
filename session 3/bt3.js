let student = [
    {
        id: 1,
        name: 'Hào',
    },
    {
        id: 2,
        name: "Hạ",
    }
]

function DuyetSinhVien () {
    student.forEach((student) => {
        console.log("xin chào",student.name)
    })
}
DuyetSinhVien();