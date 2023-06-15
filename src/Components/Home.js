//import React from 'react'
import React, { useState } from 'react';


const Home = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleAddTodo = () => {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    };
  
    const handleRemoveTodo = (index) => {
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    };

  return (
    <div className='home-container'>
    <h1 className='todolist'>To-Do List</h1>
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task"
      />
      <button className='add' onClick={handleAddTodo}>Add</button>
    </div>
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo}
          <button className='remove' onClick={() => handleRemoveTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Home
