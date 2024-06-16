import React, { useState } from 'react';

const ChangeColor = () => {
    const [color, setColor] = useState('black');

    const toggleColor = () => {
        setColor((prevColor) => (prevColor === 'black' ? 'red' : 'black'));
    };

    return (
        <div>
            <p style={{ color: color }}>Tiêu đề văn bản</p>
            <button onClick={toggleColor}>Change Color</button>
        </div>
    );
};

export default ChangeColor;
