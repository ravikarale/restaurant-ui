import React from "react";
import RattingAndStatus from "./ratting_and_status";
import { Link } from "react-router-dom";

function RestaurantCard(props){
  const { id, name, image_url, is_closed, url, rating, price, categories, review_count } = props.restaurantDetails;

  return (
      <React.Fragment>
          <div className="restaurant-card">
            <div>
              <img className="image" src={image_url} alt="restaurant"></img>
            </div>
            <div className="card-title">{name}</div>
            <RattingAndStatus categories={categories} rating={rating} is_closed={is_closed} price={price}/>
            <div className="know-more-btn">
              <Link className='learn-more-btn' to={`view_restaurant/${id}`}>Learn More</Link>
            </div>
          </div>
      </React.Fragment>
  )
}

export default RestaurantCard;
