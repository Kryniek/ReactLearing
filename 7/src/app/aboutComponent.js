import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class AboutComponent extends Component {
    render() {
        return (
            <div id="aboutComponent">
                <Link to='/'>Home</Link>
                <h1>About</h1>
                <p>I'm awesome</p>
            </div>
        );
    }
}