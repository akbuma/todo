import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'
import './style.css'

function App() {
    const todo = todosData.map(item => <TodoItem key={item.id} item={item}/>)

    return (
        <div className="todo-list">
            {todo}
        </div>
    );
}

export default App