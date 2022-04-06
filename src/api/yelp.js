import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 2YPBsWrGa5vYqJeE6hIOm9yghTmPCjXKH1A9VB0mLiZrck_utjme7UlfQZlfNwGJbdOtTS2LHyVtNMY4UBqNC7ZrM2lW-m0dcmae4N1HebJrCc6IsKvIBtO6d3hIYnYx"
    }
})