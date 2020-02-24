import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer vgKO2jM1cDDGRTCmGf5h6nhXNSHh77bBWPZ21dCqlPMwIvUPjQ2vsiafSN4UxNe3rkNYQNAoLOcfeRBXR23VPYskbZKpzLhTDICPzmsE82v1OghMM041SGVpjNlTXnYx'
    }
})