import React, { useState } from 'react';

const SelectionBox = () => {
    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedHobbies([...selectedHobbies, value]);
        } else {
            setSelectedHobbies(selectedHobbies.filter(hobby => hobby !== value));
        }
    };

    return (
        <div>
            <p>Sở thích:</p>
            <div>
                <input 
                    type='checkbox' 
                    value='Đi chơi' 
                    onChange={handleCheckboxChange} 
                /> Đi chơi
            </div>
            <div>
                <input 
                    type='checkbox' 
                    value='Code' 
                    onChange={handleCheckboxChange} 
                /> Code
            </div>
            <div>
                <input 
                    type='checkbox' 
                    value='Bơi lội' 
                    onChange={handleCheckboxChange} 
                /> Bơi lội
            </div>
            <div>
                <input 
                    type='checkbox' 
                    value='Nhảy dây' 
                    onChange={handleCheckboxChange} 
                /> Nhảy dây
            </div>
            <div>
                <p>Sở thích đã chọn: {selectedHobbies.join(', ')}</p>
            </div>
        </div>
    );
};

export default SelectionBox;
