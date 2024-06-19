import React, { useMemo, useState } from 'react'

const List = () => {
    // memo là 1 hook dùng để tawg hiệu năng bằng cách ghi nhớ kết quả tính toán mà không cần tính toán 
    const [arr, setArr] = useState([1,2,3])
    const [count, setCount] = useState(0);

    const total = useMemo(() => {
        console.log("tinh total");
        
        return  arr.reduce((temp, num) => temp + num, 0); // tính tổng
    }, [arr])  

    const handleRandom = () => {
        let number = Math.floor(Math.random()*100)
        setArr([...arr, number])
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={() =>setCount(count+ 1)}>Tăng</button>
            <p>{total}</p>
            <button onClick={handleRandom}>Random</button>
        </div>
    )
}

export default List