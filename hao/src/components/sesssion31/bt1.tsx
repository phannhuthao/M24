import React, { Component, ChangeEvent, FormEvent } from 'react';

interface State {
    email: string;
}

class People extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            email: 'haophannhut26@gmail.com'
        };

        // Bind methods
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            email: event.target.value
        });
    }

    handleSubmit(event: FormEvent<HTMLFormElement>): void {
        event.preventDefault(); 
        console.log(this.state.email); 
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Form</p>
                    <input 
                        type="text" 
                        placeholder="nhap email" 
                        value={this.state.email}
                        onChange={this.handleInputChange} 
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default People;
