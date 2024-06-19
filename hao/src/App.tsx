import './App.css'



// function App() {
//   const [count, setCount] = useState(0)
//   // console.log("hello");
//   // two way data binding: (data (model) -> view )
//   // dữ liệu được lưu trữ trong commpent

  // class App extends Component<{}, {text: string, isAlive: boolean, date: Date }> {
  //   constructor(props: {}) {
  //     super(props);
  //     this.state = {
  //       text: 'Phan Nhựt Hào',
  //       isAlive : true,
  //       date: new Date()
   
  //     }
  //   }

  //   // setTimeout: sau 1 thời gian nhất thực hiện hàm chỉ định
  //   // didMount: là lần render đầu tiên
  //   // didUpdate

  //   componentDidMount(): void {
  //     // hiển thị lần đầu

  //     // kích hoạt will Update
  //     // this.setState({...this.state, date: new Date()})
  //     setTimeout(() => {
  //       this.setState({...this.state, date: new Date()})

  //     },1000)
  //   }
  //   componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{ text: string; isAlive: boolean; date: Date }>, snapshot?: any): void {
  //    // chạy mỗi lần state thay đổi 
  //    setTimeout(() =>{
  //     this.setState({...this.state, date : new Date()})
  //    },1000) 
  //   }


  // Đồng hồ đếm ngược
  
// class App extends Component<{}, { text: string; isAlive: boolean; setTime: number; inputTime: string; isPaused: boolean }> {
//   timerID: any;

//   constructor(props: {}) {
//     super(props);
//     this.state = {
//       text: 'Phan Nhựt Hào',
//       isAlive: true,
//       setTime: 0,
//       inputTime: '',
//       isPaused: false,
//     };
//   }

//   componentDidMount(): void {}

//   componentWillUnmount(): void {
//     clearInterval(this.timerID);
//   }

//   handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ inputTime: event.target.value });
//   }

//   startTime = () => {
//     clearInterval(this.timerID);
//     this.setState({ setTime: parseInt(this.state.inputTime) || 60 }, () => {
//       this.timerID = setInterval(() => this.demGiay(), 1000);
//     });
//   }

//   PauseTime = () => {
//     this.setState((prevState) => ({
//       isPaused: !prevState.isPaused,
//     }));
//   }

//   resertTime = () => {
//     this.setState({ setTime: 0 });
//     clearInterval(this.timerID);
//   }

//   demGiay() {
//     if (!this.state.isPaused) {
//       this.setState((prevState) => ({
//         setTime: prevState.setTime > 0 ? prevState.setTime - 1 : 0,
//       }), () => {
//         if (this.state.setTime === 0) {
//           clearInterval(this.timerID);
//         }
//       });
//     }
//   }


//   render() {
//     return (
//       <>
//       {/* <input type="number" placeholder="Đặt thời gian đếm ngược (theo giây)" value={this.state.inputTime} onChange={this.handleInputChange} />
//         <button onClick={this.startTime}>Start</button>
//         <button onClick={this.resertTime}>Resert</button>
//         <button onClick={this.PauseTime}>{this.state.isPaused ? 'Resume' : 'Pause'}</button>
//         <p>{this.state.setTime}</p>
//         <p>{this.state.text}</p>
//         <button onClick={() => this.setState({ isAlive: false })}>Xóa Parents</button>
//         <button onClick={() => this.setState */}
//         <SelectionBox></SelectionBox>
//       </>
//     );
//   }
// }

// export default App

import { createContext } from 'react'; 
import GrandFather from './components/context/GrandFather';
import Son from './components/context/Son';
import Father from './components/context/Father';
import Home from './components/reducer/home';
import List from './components/memo/list';
import Clock from './components/session36/bt5';
import FocusInput from './components/session36/bt4';
import Navbar from './components/session36/bt3';
import Focus from './components/session36/bt4';
import Scroll from './components/session36/bt6';
import KeyPress from './components/session36/bt10';
import ImagePreview from './components/session36/bt11';


export const ThemeContext = createContext({
  id: 1,
  name: "Nguyen Van A"
})

export default function App() {
  const data = {
    id: 10,
    name: "Phan Nhựt Hào"
  }


  return(
   <div>
    {/* <ThemeContext.Provider value={data}>
    <GrandFather></GrandFather>
    </ThemeContext.Provider> */}
    <ImagePreview></ImagePreview>
   </div>
  )
}