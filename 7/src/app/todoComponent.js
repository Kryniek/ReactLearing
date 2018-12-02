import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './css/todoComponent.css';

import Task from './task';
import AddTask from './addTask';

export default class TodoComponent extends Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);

        this.state = {
            tasks: ['taks 1', 'taks 2', 'taks 3', 'taks 4', 'taks 5']
        };
    }

    render() {
        return (
            <div id="todoComponent">
                <Link to='/about'>About</Link>
                <h1>What I have to do</h1>
                {this.state.tasks.map((task, index) => {
                    return <Task key={index} name={task} onDelete={this.onDelete} />;
                })}
                <AddTask onAdd={this.onAdd} />
            </div>
        );
    }

    onDelete(taskToDelete) {
        var updatedTasks = this.state.tasks.filter(function (task, index) {
            return taskToDelete !== task;
        });

        this.setState({
            tasks: updatedTasks
        });
    }

    onAdd(taskToAdd) {
        var updatedTasks = this.state.tasks;
        updatedTasks.push(taskToAdd);

        this.setState({
            tasks: updatedTasks
        });
    }
}