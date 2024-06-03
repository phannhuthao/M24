console.log('react', React); // root, đối tượng gốc
const domContainer = document.querySelector("#root");

// Tạo node gốc của dom
const root = ReactDOM.createRoot(domContainer);

// Để con và hiển thị con

// Basic

// let P = React.createElement(
//     "p",
//     {
//         id: "children",
//         class: "con",
//         name: "chan"
//     },
//     "Hạ"
// );

let P = (
    <p id="hehe">
        Hahaha
    </p>
);
root.render(P);