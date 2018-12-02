import React, { Component } from 'react';

import './css/addTask.css';

export default class AddTask extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form id="addTask" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newTaskName" />
                <input type="submit" value="add" />
            </form>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.onAdd(this.refs.newTaskName.value);
    }
}