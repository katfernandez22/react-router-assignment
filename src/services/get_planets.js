import React , {useState , useEffect} from 'react';
import axios from 'axios';
const baseURL =  `https://wdi-nyc-planets-api.herokuapp.com/planets`;

const FetchPlanets = async () => {
    try {
        const resp = await axios.get(baseURL);
        console.log('this is planets data' , resp.data.results);
        const res = resp.data.results;
        return res;
    } catch (err) {
        console.error(err);
    }
};
export default FetchPlanets
