import React, { Component } from 'react';

interface State {
  Slogan: string;
}

class ChangeState extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      Slogan: 'Học code để đi làm'
    };
  }

  changeSlogan = () => {
    this.setState({ Slogan: 'Học code để làm hacker lỏ' });
  };

  shouldComponentUpdate(nextProps: {}, nextState: State) {
    // Ngăn chặn việc render lại component khi state thay đổi
    return false;
  }

  render() {
    return (
      <div>
        <p>{this.state.Slogan}</p>
        <button onClick={this.changeSlogan}>Change State</button>
      </div>
    );
  }
}

export default ChangeState;
