import React from 'react'

type PropsType = {
    countProp: number;
    nameProps: string;
    setCountProp: Function;
    setNameProp: Function;
}

export const Student = (props: PropsType) => {
    return(
        <div>
            <p>Count Childrent {props.countProp}</p>
            <button onClick={() =>props.setCountProp(props.countProp+3)}></button>
        </div>
    )
}

