import React from "react";
import { Rating } from 'react-simple-star-rating'

function Review(props){
  const { rating, text, time_created, user}  = props.review;

  let displayDate = time_created.split(" ")[0].split("-").reverse().join('/')
  return(
    <React.Fragment>
      <div className="review-card">
        <div className="profile-section">
          <div className="profile"><img src={user.profile_url} alt='profile'></img></div>
          <div className="title">
            <div className="name">{user.name}</div>
            <div className="date">{displayDate}</div>
          </div>
        </div>
        <div className="context">
          <div className="rating">
            <Rating readonly fillColor="#002B56" style={{ fontSize: '5px' }}  initialValue={rating}/>
          </div>
          <div className="comment">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Review;
