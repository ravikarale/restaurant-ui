import getAxiosInstance from '.'

export const getRestaurants = (perPage, offset, category) => {
    const axios = getAxiosInstance();
    let params = {
        location: 'Las Vegas', 
        limit: perPage, 
        offset: offset
    }
    if(category){
        params['categories'] = category
    }
    return axios({
        method: 'GET',
        url: `businesses/search`,
        params: params
    })
}

export const getRestaurantDetails = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: 'GET',
        url: `businesses/${id}`
    })
}

export const getReviews = (id) => {
    const axios = getAxiosInstance();
    return axios({
        method: 'GET',
        url: `businesses/${id}/reviews`
    })
}
