// import React from "react";

// export default function Table() {
//   //js ở đây
//   return (
//     //trả về jsx
//     <div></div>
//   );
// }

import React, { Component } from "react";

import "./css/table.css";
export default class Table extends Component {
  //thuộc tính, constructor, method
//   constructor(props: any) {
//     super(props)
//     this.state = 
//   }

  render() {
    //js ở đây
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>name</th>
              <th>class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>aaa</td>
              <td>ks</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
    //trả về JSX
  }
}