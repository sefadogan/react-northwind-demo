import React, { Component } from 'react';
import alertify from 'alertifyjs';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export default class FormDemo2 extends Component {
    state = {
        email: "",
        password: "",
        city: "",
        description: ""
    };

    handleOnChange = event => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({
            [name]: value
        })
    };

    handleOnSubmit = event => {
        event.preventDefault();
        alertify.success(this.state.email + " added to Database successfully!");
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleOnSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" placeholder="Email" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" placeholder="Password" onChange={this.handleOnChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="select" name="city" id="city" placeholder="City" onChange={this.handleOnChange} >
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>Kastamonu</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input type="text" name="description" placeholder="Description" onChange={this.handleOnChange} />
                    </FormGroup>
                    <Button type="submit" className="btn btn-success">Save</Button>
                </Form>
            </div>
        )
    }
}
