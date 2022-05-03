import React, { useState } from 'react'
import CreateTodoField from './create-todo-field/CreateTodoField'
import TodoItem from './item/TodoItem'


const Home = () => {
    const [todos, setTodos] = useState([])
    
    const changeTodoStatus = id => {
        todos.sort((a,b) => {
            return a.sortId - b.sortId
        })
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isCompleted = !current.isCompleted
        copy.sort((a, b) => {
            return a.isCompleted - b.isCompleted
        })
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    console.log(todos)


    return(
        <div className='text-white w-4/5 mx-auto '>
            <h1 className='text-2xl font-bold text-center mb-8'>To-Do List & Tasks</h1>
            <CreateTodoField 
                todos={todos} 
                setTodos={setTodos} 
            />
            
            {todos.length === 0 
                ? <h1 className='text-1xl text-center mb-8'>NO TASKS YET...</h1>
                : <div>
                    {todos.map(todo => (
                        <TodoItem 
                            key={todo._id} 
                            todo={todo}
                            changeTodoStatus={changeTodoStatus}
                            removeTodo={removeTodo}
                        />
                    ))}
                  </div>
            }
        </div>
    )
}

export default Home