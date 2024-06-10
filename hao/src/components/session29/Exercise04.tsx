import React, { Component, ChangeEvent } from 'react';

interface State {
  selectedCity: string;
}

class Exercise04 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedCity: ''
    };
  }

  handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    this.setState({ selectedCity: event.target.value });
  };

  render() {
    return (
      <div>
        <p>Tỉnh / Thành phố: {this.state.selectedCity}</p>
        <select value={this.state.selectedCity} onChange={this.handleCityChange}>
          <option value="" disabled>Chọn Tỉnh / Thành phố</option>
          <option value="Hà Nội">Hà Nội</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
          <option value="Đà Nẵng">Đà Nẵng</option>
          <option value="Hải Phòng">Hải Phòng</option>
          <option value="Cần Thơ">Cần Thơ</option>
        </select>
      </div>
    );
  }
}

export default Exercise04;
