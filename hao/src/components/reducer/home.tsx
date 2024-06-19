import React, { useState, useReducer } from 'react'

// Các thành phần:
// Reducer: là nơi xử lí các action và cập nhật state
// Action: đại diện cho chức năng xử lí
// State: là trạng thái của reducer


const reducer = (state = 0, action: string ) => {
    // action là hành vi được gửi lên thông qua dispatch
    switch(action) {
        case "increament1": 
        return state + 1;
        case "increament2":
            return state+2;
            case "increament3":
            return state+3;
            default: 
            return state
    }
}
const Home = () => {
    // const  [count, setCount] = useState(0);
    const [count, dispatch]  = useReducer(reducer, 0, undefined);
    return(
        <div>
            <p>{count}</p>
            <button onClick={()=>dispatch("increament1")}>Tang 1</button>
            <button onClick={()=>dispatch("increament2")}>Tang 2</button>
            <button onClick={()=>dispatch("increament3")}>Tang 3</button>
        </div>
    )
}

export default Home