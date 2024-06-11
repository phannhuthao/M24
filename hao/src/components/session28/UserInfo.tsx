import React, { Component } from 'react';

class UserInfo extends Component {
  // Khai báo thuộc tính user trong class
  user = {
    fullName: 'Phan Nhựt Hào',
    gender: 'Nam',
    birthDate: '1/1/2005',
    email: 'mmmmm@gmail.com',
    address: 'Tỉnh Đồng Nai, Gia Kiệm, ấp Tín Nghĩa'
  };

  render() {
    return (
      <div>
        <h1>Thông tin cá nhân:</h1>
        <p>Họ và tên: {this.user.fullName}</p>
        <p>Giới tính: {this.user.gender}</p>
        <p>Ngày sinh: {this.user.birthDate}</p>
        <p>Email: {this.user.email}</p>
        <p>Địa chỉ: {this.user.address}</p>
      </div>
    );
  }
}

export default UserInfo;
