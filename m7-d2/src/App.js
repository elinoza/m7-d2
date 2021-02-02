import React, { Component } from "react";

import Home from "./components/Home.jsx";

import { Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    searchParams:{
      location:null,
      position:null
    }
  
  };

  handleSearchParams = (position,location) => {
    // this.setState({
    //   ...this.state,
    //   cart: {
    //     ...this.state.cart,
    //     products: [...this.state.cart.products, id],
    //   },
    // });
  };
  handleSearchPosition = (string) => {
    // this.setState({
    //   ...this.state,
    //   cart: {
    //     ...this.state.cart,
    //     products: [...this.state.cart.products, id],
    //   },
    // });
  };

  // handleRemoveFromCart = (id) => {
  //   const bookToRemove = this.state.cart.products.findIndex(
  //     (bookId) => bookId === id
  //   );

  //   this.setState({
  //     ...this.state,
  //     cart: {
  //       ...this.state.cart,
  //       products: [
  //         ...this.state.cart.products.slice(0, bookToRemove),
  //         ...this.state.cart.products.slice(bookToRemove + 1),
  //       ],
  //     },
  //   });
  // };

  render() {
    return (
      <div className="container margin-top">
        <div className="row">
          <div className="col-sm-12 text-center background-div">
            <Link to="/">
              <h1>SEARCH YOUR DREAM JOB</h1>
            </Link>
            </div>
      </div>
        
        <hr />
        <div className="container">
          <Route
            path="/"
            exact
            render={(props) => (
              <Home {...props} searchParams={this.handleSearchParams} searchPosition={this.handleSearchPosition}  />
            )}
          />
          {/* <Route
            path="/details"
            exact
            render={(props) => (
              <Details
                {...props}
                cart={this.state.cart.products}
                removeFromCart={this.handleRemoveFromCart}
              />
            )}
          /> */}
        </div>
      </div>
    );
  }
}

export default App;