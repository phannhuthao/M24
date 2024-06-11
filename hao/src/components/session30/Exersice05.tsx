import React, {Component} from 'react'

interface State {
    Status: string;
}

class App extends Component<{}, State> {
    constructor(props: {} ) {
        super(props);
        this.state = {
            Status: 'Open the form'
        }
    }

    changeStatus() : void {
        this.setState({Status: 'Close the From'})
    }

    render() {
        return(
            <div>
                <p>{this.state.Status}</p>
                <button onClick={this.changeStatus} ></button>
            </div>
        )
    }
}