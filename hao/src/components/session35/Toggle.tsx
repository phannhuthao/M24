import React, { useState } from 'react';

const Toggle = () => {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible((prevIsVisible) => !prevIsVisible);
    };

    return (
        <div>
            {isVisible && <p>Tiêu đề văn bản</p>}

            <button onClick={toggleVisibility}>
                {isVisible ? 'Ẩn Tiêu Đề' : 'Hiện Tiêu Đề'}
            </button>
        </div>
    );
};

export default Toggle;
