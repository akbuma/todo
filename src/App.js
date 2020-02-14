import React, { Component } from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'
import './style.css'

/*
In the previous iteration of this todo list app, we pulled in todos data from a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the imported `todosData` into state.
*/

class App extends Component {

    constructor() {
        super()
        this.state = {
            todos: todosData
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    // Objects are passed by reference, not value 
                    // Do not use todo.completed = !todo.completed as the original state will be modified
                    // Return a brand new object that will replace the todo below
                    return {
                        ...todo,
                        // Manually override the spread operator
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        );
    }

}

export default App