import React, { useState } from 'react'

const CreateTodoField = ({setTodos, todos}) => {
  
  const[title, setTitle] = useState('')
  const [lastSortId, setLastSortId] = useState(0)
  
  const addTodo = (title, lastSortId, todos) => {
    const newId = lastSortId + 1
    setLastSortId(newId)
    setTodos(prev => {
      let newTodo = [
        ...prev, {
          _id: Date.now(),
          title: title,
          isCompleted: false,
          sortId: newId,
      }, ]
      newTodo.sort((a,b) => {
        return a.sortId - b.sortId
      })
      newTodo.sort((a, b) => {
        return a.isCompleted - b.isCompleted
      })
      return newTodo
    })
    setTitle('')
}


  return (
    <div className='flex items-center justify-between mb-5 rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-5'>
        <input 
            type="text" 
            onChange={e => setTitle(e.target.value)} 
            value={title}
            onKeyPress={e => e.key === 'Enter' && addTodo(title, lastSortId, todos)}
            placeholder='Add a task'
            className='bg-transparent w-full border-none outline-none' />
    </div>
  )
}

export default CreateTodoField