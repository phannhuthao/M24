let classroom = [
    {
        id: 1,
        number: 25,
    },
    {
        id: 1,
        number: 30,
    },
    {
        id: 1,
        number: 50,
    },
]

let modifiedClassroom = classroom.map((classroom) => {
    let modifiedNumber = classroom.number;
    if (classroom.number < 30) {
        modifiedNumber += 10;
    } else if (classroom.number > 40) {
        modifiedNumber -= 10;
    }
    return {
        id: classroom.id,
        number: modifiedNumber,
    };
});

console.log(modifiedClassroom);