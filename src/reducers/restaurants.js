import { createReducer, createNamespacer } from '../commons/utils/reducer';

const namespacers = {
    restaurants: createNamespacer("RESTAURANTS"),
}

const initialState = {
    isLoading: false,
    restaurants: [],
    copyOfRestaurants: [],
    pageOffset: 12,
    pageCount: 0,
    isOpenNow: false,
    priceFilter: "",
    categoryFilter: "",
    restaurantId: null,
    reviews: [],
    details: []
}

const restaurantReducer = createReducer(initialState, {
    [namespacers.restaurants("SET_LOADING")]: (state, action) => {
        return {
            ...state,
            isLoading: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_PAGE_OFFSET")]: (state, action) => {
        return {
            ...state,
            offset: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_PAGE_COUNT")]: (state, action) => {
        return {
            ...state,
            pageCount: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_RESTAURANTS")]: (state, action) => {
        return {
            ...state,
            restaurants: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_COPY_RESTAURANTS")]: (state, action) => {
        return {
            ...state,
            copyOfRestaurants: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_IS_OPEN")]: (state, action) => {
        return {
            ...state,
            isOpenNow: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_PRICE_FILTER")]: (state, action) => {
        return {
            ...state,
            priceFilter: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_CATEGORY_FILTER")]: (state, action) => {
        return {
            ...state,
            categoryFilter: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_RESTAURANT_DETAILS")]: (state, action) => {
        return {
            ...state,
            details: action.payload.value,
        }
    },
    [namespacers.restaurants("SET_REVIEWS")]: (state, action) => {
        return {
            ...state,
            reviews: action.payload.value,
        }
    },
    
});

export default restaurantReducer;