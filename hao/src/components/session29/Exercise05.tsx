import React, { Component } from 'react';

interface State {
  isShown: boolean;
}

class Exercise05 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isShown: true
    };
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({ isShown: !prevState.isShown }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleVisibility}>
          {this.state.isShown ? 'Hiển' : 'Ẩn'}
        </button>
      </div>
    );
  }
}

export default Exercise05;
