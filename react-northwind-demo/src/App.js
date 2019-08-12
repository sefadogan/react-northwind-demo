import React, { Component } from 'react';
import Navi from './Navi';
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Container, Row, Col } from 'reactstrap';
import alertify from 'alertifyjs';
import { Switch, Route } from 'react-router-dom';
import CartList from './CartList'
import NotFound from './NotFound'
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';

export default class App extends Component {

  state = {
    currentCategory: "",
    products: [],
    cart: []
  }

  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  }

  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
  }

  removeFromCart = productId => {
    let newCart = this.state.cart.filter(cartItem => cartItem.product.id !== productId);

    this.setState({ cart: newCart });
    alertify.success("Product removed from cart!");
  }

  componentDidMount() {
    this.getProducts();
  }

  addToCart = product => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item => item.product.id === product.id);

    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 })
    }

    alertify.success(product.productName + " added to cart!");
    this.setState({ cart: newCart });
  }

  render() {
    let productInfo = {
      title: "Products"
    }

    let categoryInfo = {
      title: "Categories"
    }

    return (
      <Container>
        <Navi
          cart={this.state.cart}
          removeFromCart={this.removeFromCart}
        />
        <Row>
          <Col xs="3">
            <CategoryList
              currentCategory={this.state.currentCategory}
              changeCategory={this.changeCategory}
              info={categoryInfo} />
          </Col>
          <Col xs="9">
            <Switch>
              <Route
                exact
                path="/"
                render={props =>
                  <ProductList
                    {...props}
                    products={this.state.products}
                    info={productInfo}
                    currentCategory={this.state.currentCategory}
                    addToCart={this.addToCart}
                  />
                }
              />
              <Route
                exact
                path="/cart"
                render={props =>
                  <CartList
                    {...props}
                    cart={this.state.cart}
                    removeFromCart={this.removeFromCart}
                  />
                }
              />
              <Route exact path="/form-demo1" component={FormDemo1} />
              <Route exact path="/form-demo2" component={FormDemo2} />
              <Route component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    )
  }
}