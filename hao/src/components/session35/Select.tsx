import React, { useState } from 'react';

export const CitySelector = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleCityChange = (event: any) => {
        setSelectedCity(event.target.value);
    };

    return (
        <div>
            <p>Thành phố:</p>
            <select value={selectedCity} onChange={handleCityChange}>
                <option value="">Chọn thành phố</option>
                <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                <option value="Đồng Nai">Đồng Nai</option>
                <option value="Đà Lạt">Đà Lạt</option>
            </select>
            {selectedCity && (
                <p>Tên thành phố được chọn: {selectedCity}</p>
            )}
        </div>
    );
};

export default CitySelector;
