import React , {Component} from 'react'

class Nut extends Component {
    handleClick = () => {
        console.log('Click');
    };
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        );
    } 
}
export default Nut;