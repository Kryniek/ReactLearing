import React, { Component } from 'react';

import './css/task.css';

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    render() {
        return (
            <div className="task">
                <p className="taskName">{this.props.name}</p>
                <span className="taskRemove" onClick={this.handleDelete}> x </span>
            </div>
        );
    }

    handleDelete() {
        this.props.onDelete(this.props.name);
    }
}