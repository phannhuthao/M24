import React, { Component } from 'react';

interface State {
    birthDate: string;
}

class NgayThangNam extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            birthDate: ''
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ birthDate: event.target.value });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        // Optionally, you can perform further processing here.
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Ngày sinh:
                        <input
                            type="date"
                            value={this.state.birthDate}
                            onChange={this.handleInputChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
                <p>Ngày sinh của bạn là: {this.state.birthDate}</p>
            </div>
        );
    }
}

export default NgayThangNam;
