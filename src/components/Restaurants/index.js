import React, { Component } from "react";
import Filter from "./filter";
import RestaurantCard from "./restaurant_card";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'

const perPage = 12;

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.handleLoadMore(perPage)
  }

  _renderRestaurants() {
    return this.props.restaurants.length > 0 ? (
        this.props.restaurants.map((restaurant, index) => (
            <RestaurantCard
                key={index}
                restaurantDetails={restaurant}
            />
        ))
    ) : null
}

  render() {
    return (
      <React.Fragment>
        <div className={`${this.props.isLoading ? 'parentDisable' : ''} restuarnat-container`}>
          {this.props.isLoading ? <div className="loader"><Oval color="#00BFFF" height={80} width={80} /></div> : null}
          <h1>
            Restaurants
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="search-container">
              <Filter
                setIsOpen={this.props.setIsOpen}
                restaurantsProps={this.props}
                handlePriceChange={this.props.handlePriceChange}
                handleCategoryChange={this.props.handleCategoryChange}
                clearFilter={this.props.clearFilter}
              />
          </div>

          <h1>All Restaurants</h1>
          <div className="restaurant-card-container">
            {
                this._renderRestaurants()
            }
          </div>
          {this.props.restaurants.length ?
            <div className="button-container">
              <button className="load-more" onClick={() => this.props.handleLoadMore(this.props.pageOffset + perPage)}>Load More</button>
            </div> : null}

        </div>

      </React.Fragment>
    );
  }
}
export default Restaurants;