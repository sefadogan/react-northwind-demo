import React, { Component } from 'react'

export default class FormDemo1 extends Component {
    state = {
        userName: '',
        city: ''
    }

    handleOnChange = event => {
        // this.setState({ username: event.target.value })
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        alert(this.state.userName + " - " + this.state.city);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="userName" placeholder="Username" onChange={this.handleOnChange} />
                    <h5>Username is {this.state.userName}</h5>

                    <input type="text" name="city" placeholder="City" onChange={this.handleOnChange} />
                    <h5>City is {this.state.city}</h5>

                    <input type="submit" value="Submit" className="btn btn-success" />
                </form>
            </div>
        )
    }
}
