import React, { Component } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'
import RattingAndStatus from "./../Restaurants/ratting_and_status";
import Review from "./review";

class ViewRestaurant extends Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    let { restaurant_id } = this.props.match.params;
    if(restaurant_id){
      this.props.loadDetails(restaurant_id)
      this.props.loadReviews(restaurant_id)
    }
  }

  render() {
    const { name, price, rating, is_closed, photos, location, coordinates, categories  } = this.props.details;
    return (
      <React.Fragment>
        <div className={`${this.props.isLoading ? 'parentDisable' : 'view-restaurant'}`}>
          {this.props.isLoading ? <div className="loader"><Oval color="#00BFFF" height={80} width={80} /></div> : null}
          <div className="header">
            <h1>{name}</h1>
            <RattingAndStatus categories={categories} rating={rating} is_closed={is_closed} price={price}/>
          </div>
          <div className="map-container">
            
          </div>
          <div className="review-container">
            {`${this.props.reviews.length} Reviews`}
            {this.props.reviews.map((review, index) => {
              return (
                <Review review={review} key={index}/>
              )
            })}
          </div>
        </div>

      </React.Fragment>
    );
  }
}
export default ViewRestaurant;