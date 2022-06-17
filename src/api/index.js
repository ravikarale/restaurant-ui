import axios from 'axios';

const getAxiosInstance = () => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_BASEURL,
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            "accept": "application/json",
            "x-requested-with": "xmlhttprequest",
            "Access-Control-Allow-Origin":"*",
        },
    })

    instance.interceptors.response.use((response) => {
        return response
    }, error => {
        if(error.response.status === 401){
        }
        throw error
    })

    return instance;
};

export default getAxiosInstance;