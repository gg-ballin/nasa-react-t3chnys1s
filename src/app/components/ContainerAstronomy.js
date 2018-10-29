import React, { Component } from 'react';
import CardAstronomy from './CardAstronomy';
import axios from 'axios';


class ContainerAstronomy extends Component {
    constructor() {
        super();
        this.state = {
            astronomy: []
        }
    }
    
    componentDidMount() {
        const API_KEY = 'GyCR3BLFfSAeKdQNO6c7pPhqGFdINJ05d4obCskt';
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key=';

        axios.get(END_POINT + API_KEY)
            .then(response => {
                this.setState({
                    astronomy: response.data
                })
                console.log(this.state.astronomy);
            })
            .catch(error => {
                console.log(error, 'couldn`t fech data');
            });
    }


    render() {
        const { astronomy } = this.state;
        return (
            
                <CardAstronomy data={astronomy} />
            
        )
    }
}

export default ContainerAstronomy;