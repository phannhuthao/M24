import React, { Component, ChangeEvent } from 'react';

interface State {
    selectedDate: string;
}

class Exercise03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedDate: ''
    };
  }

  handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedDate: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Thời gian: {this.state.selectedDate}</p>
        <input 
          type="date" 
          value={this.state.selectedDate} 
          onChange={this.handleDateChange} 
        />
      </div>
    );
  }
}

export default Exercise03;
