import React, { Component } from 'react';

interface State {
  numbers: number[];
}

class AddElement extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      numbers: []
    };
  }

  addElement = () => {
    this.setState((prevState) => ({
      numbers: [...prevState.numbers, prevState.numbers.length + 1]
    }));
  };

  render() {
    return (
      <div>
        <p>Mảng số: {this.state.numbers.join(', ')}</p>
        <button onClick={this.addElement}>Add Element</button>
      </div>
    );
  }
}

export default AddElement;
