import ViewRestaurant from '../../components/ViewRestaurant';
import { connect } from 'react-redux'; 
import { getRestaurantDetails, getReviews } from '../../api/restaurants';
import { withRouter } from "react-router-dom";
import { createNamespacer } from '../../commons/utils/reducer';
const namespacer = createNamespacer('RESTAURANTS')

const mapStateToProps = (state) => {
    return {
        details: state.restaurants.details,
        reviews: state.restaurants.reviews,
        restaurantId: state.restaurants.restaurantId,
        isLoading: state.restaurants.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get loadDetails(){
            return (restaurantId) => {
                dispatch((dispatch, getState)=> {
                    (async () => {
                        let response;
                        this.setLoading(true)
                        try {
                            response = await getRestaurantDetails(restaurantId)

                            dispatch({
                                type: namespacer("SET_RESTAURANT_DETAILS"),
                                payload: {
                                    value: response.data
                                }
                            })
                            this.setLoading(false)
                        } catch (e) {
                            this.setLoading(false)
                            return;
                        }
                    })()
                })
            }
        },
        get loadReviews(){
            return (restaurantId) => {
                dispatch((dispatch, getState)=> {
                    (async () => {
                        let response;
                        this.setLoading(true)
                        try {
                            response = await getReviews(restaurantId)
                            dispatch({
                                type: namespacer("SET_REVIEWS"),
                                payload: {
                                    value: response.data.reviews
                                }
                            })
                            this.setLoading(false)
                        } catch (e) {
                            this.setLoading(false)
                            return;
                        }
                    })()
                })
            }
        },
        get setLoading(){
            return (value) => {
                dispatch((dispatch, getState)=> {
                    dispatch({
                        type: namespacer("SET_LOADING"),
                        payload: {
                            value: value
                        }
                    })
                })
            }
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ViewRestaurant))