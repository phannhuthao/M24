import React, { Component } from 'react';

interface Props {
  name: string;
}

interface State {}

export default class Notification extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("Component đã được mount!");
  }

  render() {
    return (
      <div>
        {/* Hiển thị tên được truyền vào qua props */}
        <p>Hello, {this.props.name}!</p>
      </div>
    );
  }
}
