import React, { Component } from 'react';

interface State {
  title: string;
}

class ChangeName extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      title: 'RikkeAcademy',
    };
  }

  changeTitle = () => {
    this.setState({ title: 'rikkeisoft' });
  };

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <button onClick={this.changeTitle}>Change state</button>
      </div>
    );
  }
}

export default ChangeName;
