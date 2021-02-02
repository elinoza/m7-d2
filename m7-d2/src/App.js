import React, { Component } from "react";

import Home from "./components/Home.jsx";
import Details from "./components/Details.jsx";
import { Route, Link } from "react-router-dom";

class App extends Component {
  state = {
    
      location:null,
      position:null
   
  
  };

  searchParams = (position,location) => {
   this.setState({ position:position, location:location})
  };



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
              <Home {...props} searchParams={this.searchParams} searchPosition={this.handleSearchPosition}  />
            )}
          />
          <Route
            path="/details"
            exact
            render={(props) => (
              <Details
                {...props}
               location={this.state.location}
               position={this.position}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;