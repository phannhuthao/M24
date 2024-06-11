

const Box = (props : any) => {
    const BoxStyle = {
        width: '200px',
        height: '200px',
        marginBottom: '10px',
    };
    return (
        <div>
            <div style={{...BoxStyle,backgroundColor :"Blue"}}></div>
            <div style={{...BoxStyle,backgroundColor :"red"}}></div>
            <div style={{...BoxStyle,backgroundColor :"green"}}></div>
        </div>
    );
}


export default Box;