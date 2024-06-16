import React, { Component, ChangeEvent, FormEvent } from 'react';

interface State {
    color: string;
    inputColor: string;
}

class ChangeColor extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            color: 'black',
            inputColor: ''
        };

        // Bind methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            inputColor: event.target.value
        });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault(); // Prevent the default form submission behavior
        this.setState({
            color: this.state.inputColor || 'red' // Default to red if no input
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p style={{ color: this.state.color }}>Color: {this.state.color}</p>
                    <input 
                        type="text" 
                        placeholder="Enter color" 
                        value={this.state.inputColor}
                        onChange={this.handleInputChange} 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default ChangeColor;
