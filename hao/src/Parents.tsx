import React, {Component} from 'react'



export default class Parents extends Component {
    // Giai đoạn 1: khởi tạo (khai báo PropsType và StateType + constructor)

    constructor(props: {name: string}) {
        console.log("Khởi tạo đối tượng từ lớp Parents")
        super(props); // gọi đến constructor gọi đến lớp cha
        this.state = {
            data: 0
        }
    }

    // Componentwillmount: chạy trước render
    componentWillMount(): void {
        console.log("Trước khi component được mount");
    }

    componentDidMount(): void {
        console.log("Sau khi component được mount");
    }

    componentWillRecieiveProps(nextProps: Readonly<{name: string;}>, nextContext: any  ): void {   // chạy trước khi update
        console.log("Component sẽ được cập nhật");
        console.log("Props cũ:", this.props);
        console.log("Props mới:", nextProps)
    }

    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{name: string;}>, nextContext: any): boolean {
        // sử dụng các logic để quyết định component có được render hay không
        // if(this.props.name !== nextProps.name) {

        // }
        return true;
    }



    // Giai đoạn 2: Mounting (sử dụng component bằng cách nhũng vào App.tsx)

    // Giai đoạn 3: Updating (cập nhật giá trị của props hoặc states/ component bị render)

    // Giai đoạn 4: Unmounting (component bị xóa khỏi DOM)

    componentWillUnmount(): void {
        // trước khi bị xóa khỏi DOM
        // thường dùng để dọn dệp rác
        console.log("Component sắp bị xóa")
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

