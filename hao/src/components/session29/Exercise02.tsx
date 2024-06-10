import React, { Component, ChangeEvent } from 'react';

interface State {
  userInput: string;
}

class Exercise02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userInput: ''
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ userInput: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Dữ liệu người dùng nhập: {this.state.userInput}</p>
        <input 
          type="text" 
          placeholder="Nhập dữ liệu" 
          value={this.state.userInput} 
          onChange={this.handleInputChange} 
        />
      </div>
    );
  }
}

export default Exercise02;
