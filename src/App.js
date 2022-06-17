import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';
import Restaurants from "./containers/Restaurants";
import ViewRestaurant from "./containers/ViewRestaurant";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/view_restaurant/:restaurant_id" component={ViewRestaurant} />
            <Route exact path="/" render={(props) => {
              return <Redirect to="/restaurants" />
            }} />
          </Switch>
          <ToastContainer autoClose={4000} draggable={false} />

        </BrowserRouter>
      </Provider>  
    );
  }
}

export default App;
