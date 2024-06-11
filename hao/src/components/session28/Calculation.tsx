import React, { Component } from 'react';

class Calculation extends Component {
  // Hàm cộng
  add(a: number, b: number) {
    return a + b;
  }

  // Hàm trừ
  subtract(a: number, b: number) {
    return a - b;
  }

  // Hàm nhân
  multiply(a: number, b: number) {
    return a * b;
  }

  // Hàm chia
  divide(a: number, b: number) {
    return b !== 0 ? a / b : 'Không thể chia cho 0';
  }

  render() {
    return (
      <div>
        <h3>Bảng Kết quả:</h3>
        <p>10 + 10 = {this.add(10, 10)}</p>
        <p>10 - 10 = {this.subtract(10, 10)}</p>
        <p>10 * 10 = {this.multiply(10, 10)}</p>
        <p>10 / 10 = {this.divide(10, 10)}</p>
      </div>
    );
  }
}

export default Calculation;
