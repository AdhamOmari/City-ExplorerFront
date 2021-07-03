import React, { Component } from 'react'
import {  Image } from 'react-bootstrap'
export class Movies extends Component {
    render() {
        return (
            <div>

                <h1 >{this.props.data}</h1>
                <h2 >{this.props.vots}</h2>
                <img alt="" src={this.props.img} ></img>
               
            </div>
        )
    }
}

export default Movies
