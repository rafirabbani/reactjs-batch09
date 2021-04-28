import React, { Component } from 'react';
import { v4 as uuid_v4 } from "uuid";
import ToDoList from './ToDoList';

const listTodo = [
	{
		id: uuid_v4(),
		task: 'Learn Javascript es6',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Learn React Fudamental',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Learn Redux Fudamental',
		completed: false
	},
	{
		id: uuid_v4(),
		task: 'Final Project #1',
		completed: false
	}
];

class Todo extends Component {
	state = {
		task: '',
		items: []
	}

	componentDidMount() {
		// your code...
        this.setState({items: listTodo});
	}

	handleOnChange = e => {
		const { target: { value } } = e;
		//console.log(value);

		// complete code below
		this.setState({
			task: value
		});
	}

	handleOnSubmit = e => {
        const taskObj = {
            id: uuid_v4(),
            task: this.state.task,
            completed: false
        }
		e.preventDefault();
		// your code, use spread operator to add new task
        this.setState({
            items: [...this.state.items, taskObj]
        })
	}

	isCompleted = (id) => {

		// your code, find id, then use spread operator
          this.setState({
            items: [...this.state.items.map(item => {
                if (item.id === id) {
                    item.completed = !item.completed
                }
                return item
            })]
          });
	}

	removeTask = (id) => {

		// your code, use filter to get new task list
        this.setState({
            items: [...this.state.items.filter(item => {
                if(item.id !== id){
                    return item
                }
            })]
        })
	}

	render() {
		return (
			<div className="Todo">
				<h1>Todo List:</h1>

				<form onSubmit={this.handleOnSubmit}>
					<input value={this.state.task} onChange={this.handleOnChange} />
				</form>

				<ToDoList
					items={this.state.items}
					isCompleted={this.isCompleted}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}

export default Todo;