import React, { useContext } from 'react'
import { ThemeContext } from '../../App'


const Son = () => {
    const data = useContext(ThemeContext)
    console.log(data);
    return (
        <div>
            <h2>Cháu</h2>
        </div>
    )
}


export default Son