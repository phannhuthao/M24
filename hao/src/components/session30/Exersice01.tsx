import React, { Component } from 'react';

interface State {
    userName: string;
}

class Exercise01 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      userName: 'Nguyễn Thanh Hạ'
    };
  }

  render() {
    return (
      <div>
        <p>{this.state.userName}</p>
      </div>
    );
  }
}

export default Exercise01;
