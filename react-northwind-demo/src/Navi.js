import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind Demo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Products</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/form-demo1">Form Demo1</NavLink>
                            </NavItem>

                            <CartSummary
                                cart={this.props.cart}
                                removeFromCart={this.props.removeFromCart}
                            />

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
