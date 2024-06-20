import React from 'react';
import './body.css'; 

const Body = () => {
    return (
        <div className='bodyweb'>
            <div className='image'>
                <img src='src\components\session37\image\dienthoai.jpg' alt='Example' />
            </div>
            <div className='title'>
                <h1>Log in to Exclusive</h1>
                <p>Enter your details below</p>
                <input type='text' placeholder='Email or Phone Number' />
                <input type='password' placeholder='Password'/>
                <div className='buttons'>
                    <button className='login'>Login</button>
                    <button className='Forget'>Forget password ?</button>
                </div>
            </div>
        </div>
    );
};

export default Body;
