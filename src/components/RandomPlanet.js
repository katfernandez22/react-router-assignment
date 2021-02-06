import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
export default class RandomPlanet extends React.Component{
    state = {
        planet:{}
    }


    componentDidMount() {
        axios.get(`https://wdi-nyc-planets-api.herokuapp.com/planets/random`).then((res) => {
            console.log('random' , res)
            this.setState({planet: res.data.planet});
        });
    }

    render() {

        return(
            <div><h1>Random Planet </h1> <div className=""> <p> <b>Name:{this.state.planet.name} </b></p> <p><b>Color:</b>{this.state.planet.color} </p> <p> <b>Num of Moons:</b>{this.state.planet.num_moons}</p> </div></div>

        )

    }


}
