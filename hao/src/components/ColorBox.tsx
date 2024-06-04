import React from 'react';

const Box  = () => {
    const BoxStyle = {
        width: '200px',
        height: '200px',
        marginBottom: '10px',
    };
    return(
        <div>
        <div style={{...BoxStyle, backgroundColor: 'red' }} />
        <div style={{...BoxStyle, backgroundColor: 'blue'}} />
        <div style={{...BoxStyle, backgroundColor: 'green'}}/>
        </div>
    );
}


export default Box;