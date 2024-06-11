import React, {Component} from 'react'

interface State {
    Mess: string;
}

class App extends Component <{}, State> {
    constructor(props: {}) {
        super(props);
        this.state= {
            Mess: 'Interface rendering'
        }
    }

    ChangeMessage(): void {
        this.setState({Mess: 'Interface'})
    }

    render() {
        return(
            <div>
                <p>Message: {this.state.Mess}</p>
                <button onClick={this.ChangeMessage}>Change Message</button>
            </div>
            
        ) 
    }
}