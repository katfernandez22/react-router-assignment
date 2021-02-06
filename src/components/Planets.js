import React from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
export default class Planets extends React.Component{
    state = {
        planets: []
    }


    componentDidMount() {
        axios.get(`https://wdi-nyc-planets-api.herokuapp.com/planets`).then((res) => {

            this.setState({planets: res.data.planets});
        });
    }

    handleClick = event => {
        event.preventDefault();
        const planet = {
            name: this.state.name,
            color: this.state.color,
            no: this.state.num_moons
        }
        console.log('this is specific planet' , event.target.innerHTML);
        const detpage = event.target.innerHTML;
        localStorage.setItem('planet' , detpage);
        window.location.href = '/planets-detail'; //relative to domain


    }


    render() {

        return(
            <div><h1>Planet List </h1> <ul className="planet-list">{this.state.planets.map(planet => <span onClick={this.handleClick}><li>{planet.name}</li></span>)}</ul></div>
        )

    }


}
