import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import TodoComponent from './todoComponent';
import AboutComponent from './aboutComponent';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TodoComponent}></Route>
                    <Route path='/about' component={AboutComponent}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('todoWrapper'));