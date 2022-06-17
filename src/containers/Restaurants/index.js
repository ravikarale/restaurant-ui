import Restaurants from '../../components/Restaurants';
import { connect } from 'react-redux'; 
import { getRestaurants } from '../../api/restaurants';
import { withRouter } from "react-router-dom";
import { createNamespacer } from '../../commons/utils/reducer';
const perPage = 12;
const namespacer = createNamespacer('RESTAURANTS')

const mapStateToProps = (state) => {
    return {
        restaurants: state.restaurants.restaurants,
        pageOffset: state.restaurants.pageOffset,
        pageCount: state.restaurants.pageCount,
        isOpenNow: state.restaurants.isOpenNow,
        priceFilter: state.restaurants.priceFilter,
        categoryFilter: state.restaurants.categoryFilter,
        isLoading: state.restaurants.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        get handleLoadMore(){
            return (offset) => {
                dispatch((dispatch, getState)=> {
                    const restaurants = getState().restaurants.restaurants;
                    (async () => {
                        let response;
                        this.setLoading(true)
                        try {
                            response = await getRestaurants(perPage, offset)
                            dispatch({
                                type: namespacer("SET_RESTAURANTS"),
                                payload: {
                                    value: [...restaurants, ...response.data.businesses]
                                }
                            })
                            dispatch({
                                type: namespacer("SET_COPY_RESTAURANTS"),
                                payload: {
                                    value: [...restaurants, ...response.data.businesses]
                                }
                            })
                            dispatch({
                                type: namespacer("SET_PAGE_OFFSET"),
                                payload: {
                                    value: offset
                                }
                            })
                            this.setLoading(false)
                        } catch (e) {
                            this.setLoading(false)
                            // toast.error("Oops! Something went wrong. Please try again.", {
                            //     position: toast.POSITION.BOTTOM_CENTER
                            // })
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
        get setIsOpen (){
            return(value) => {
                dispatch((dispatch, getState)=> {
                    if(value){
                        const restaurants = getState().restaurants.restaurants;
                        let filteredRestaurants = restaurants.filter(restaurant => !restaurant.is_closed )
                        dispatch({
                            type: namespacer("SET_IS_OPEN"),
                            payload: {
                                value: value
                            }
                        })
                        dispatch({
                            type: namespacer("SET_RESTAURANTS"),
                            payload: {
                                value: filteredRestaurants
                            }
                        })
                    }else{
                        this.handleLoadMore(0);
                    }
                })
            }
        },
        get handlePriceChange (){
            return(value) => {
                dispatch((dispatch, getState)=> {
                    const restaurants = getState().restaurants.copyOfRestaurants;
                    if(value != 'all'){
                        let filteredRestaurants = restaurants.filter(restaurant => restaurant.price === value )
                        dispatch({
                            type: namespacer("SET_RESTAURANTS"),
                            payload: {
                                value: filteredRestaurants
                            }
                        })
                    }else{
                        dispatch({
                            type: namespacer("SET_RESTAURANTS"),
                            payload: {
                                value: restaurants
                            }
                        })
                    }
                    dispatch({
                        type: namespacer("SET_PRICE_FILTER"),
                        payload: {
                            value: value
                        }
                    })
                })
            }
        },
        get handleCategoryChange (){
            return (category) => {
                dispatch((dispatch, getState)=> {
                    const restaurants = getState().restaurants.restaurants;
                    const pageOffset = getState().restaurants.pageOffset;
                    (async () => {
                        let response;
                        this.setLoading(true)
                        try {
                            response = await getRestaurants(perPage, pageOffset, category)
                            dispatch({
                                type: namespacer("SET_RESTAURANTS"),
                                payload: {
                                    value: [...restaurants, ...response.data.businesses]
                                }
                            })
                            dispatch({
                                type: namespacer("SET_COPY_RESTAURANTS"),
                                payload: {
                                    value: [...restaurants, ...response.data.businesses]
                                }
                            })
                            dispatch({
                                type: namespacer("SET_CATEGORY_FILTER"),
                                payload: {
                                    value: category
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
        get setIsOpen (){
            return(value) => {
                dispatch((dispatch, getState)=> {
                    const restaurants = getState().restaurants.copyOfRestaurants;
                    if(value){
                        let filteredRestaurants = restaurants.filter(restaurant => !restaurant.is_closed )
                        dispatch({
                            type: namespacer("SET_RESTAURANTS"),
                            payload: {
                                value: filteredRestaurants
                            }
                        })
                    }else{
                        dispatch({
                            type: namespacer("SET_RESTAURANTS"),
                            payload: {
                                value: restaurants
                            }
                        })
                    }
                    dispatch({
                        type: namespacer("SET_IS_OPEN"),
                        payload: {
                            value: value
                        }
                    })
                })
            }
        },
        get clearFilter(){
            return(value) => {
                dispatch((dispatch, getState)=> {
                    dispatch({
                        type: namespacer("SET_IS_OPEN"),
                        payload: {
                            value: false
                        }
                    })
                    dispatch({
                        type: namespacer("SET_PRICE_FILTER"),
                        payload: {
                            value: ""
                        }
                    })
                    dispatch({
                        type: namespacer("SET_CATEGORY_FILTER"),
                        payload: {
                            value: ""
                        }
                    })
                })
            }
        }

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Restaurants))