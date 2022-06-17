import React from "react";
import { Rating } from 'react-simple-star-rating'

function RattingAndStatus(props){
  const { rating, categories, is_closed, price}  = props;

  return(
    <React.Fragment>
      <div className="rating">
        <Rating readonly fillColor="#002B56" style={{ fontSize: '5px' }}  initialValue={rating}/>
      </div>
      <div className="category-status">
        <div className="category">
          <div>{categories && categories[0].title} {" "} {price}</div>
        </div>
        <div className="status">
          {is_closed ?
            <>
              <div className="closed"></div>
              <div>CLOSED</div>
            </>
          :
            <>
              <div className="open"></div>
              <div>OPEN NOW</div>
            </>
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default RattingAndStatus;
