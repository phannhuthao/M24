// rfc: react function component 
// rafc : react arrow function component 

import React, {useEffect, useState} from 'react' 
import { Student } from './Student';

export const Parent = () => {
    // state: hook useState giúp quản lí trạng thái
    const [count, setCount] = useState(0) // trả về 1 mảng gồm 2 phần tử, phần tử 1 là trạng thái
    // Phần tử thứ 2 là 1 hàm dùng để cập nhật trạng thái
    
    const resert = () => setCount(0);

    // YÊU CẦU LƯU TRỮ NHIỀU STATE
    const [name, setName] = useState("Nguyễn Thanh Hạ")

    // EFFECT: hook useEffect giúp can thiệp vào các giai đoạn của component
    // Có 3 cách dùng
    // C1
    useEffect (() => {
        console.log("useEffect cách dùng 1 : Không phụ thuộc, sẽ được gọi sau mỗi lần component render hoặc rerender", useEffect)
    })

    // C2
    useEffect(() => {
        console.log("useEffect cách dùng 2: có phụ thuộc là 2 mảng rỗng, sẽ được gọi 1 lần duy nhất sau khi component mounting")
    }, [])

    // C3
    useEffect(() => {
        console.log("useEffect cách dùng 3: có phụ thuộc là 2 mảng không rỗng, sẽ được gọi khi component được mount và mỗi lần sau khi phụ thuộc bị thay đổi ")
    }, [count])

    
    

    
    return(
        <div>
            <p>Click để tăng, giảm số</p>
            <p>{count}</p>
            <button  onClick={() => setCount(count + 1)}>Tăng</button>
            <button  onClick={() => setCount(count - 1)}>Giảm</button>
            <button  onClick={(resert)}>Resert</button>
            <p>{name}</p>
            <button onClick={() => setName("Phan Nhựt Hào")}>Thay đổi tên</button>

            <Student countProp={count} nameProps={name} setCountProp={setCount} setNameProp={setName}  ></Student>
            <button></button>
            {/* <Student></Student> */}

        </div>
    )

}

export default Parent