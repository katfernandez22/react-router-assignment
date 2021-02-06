import React from 'react';
import axios from 'axios';
export default class PlanetDetail extends React.Component{
    state = {
        planets: []
    }


    componentDidMount() {
        axios.get(`https://wdi-nyc-planets-api.herokuapp.com/planets`).then((res) => {
            const arr = res.data.planets;
            const planet_to_show = localStorage.getItem('planet');
            const newArray = arr.filter(function (el) {
                return el.name == planet_to_show
            });
            console.log('this is filterd array' , newArray);
            this.setState({planets: newArray});
        });
    }

    render() {

        return(
            <div><h1>Planet Detail </h1> <div className="">{this.state.planets.map(planet => <span> <p> <b>Name:</b>{planet.name} </p> <p> <b>Color:</b>{planet.color} </p> <p> <b>Num of Moons:</b>{planet.num_moons}</p></span>)}</div></div>
        )

    }


}
