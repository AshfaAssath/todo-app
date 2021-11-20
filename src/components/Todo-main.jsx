import React from "react";
import {useState} from 'react';

function Todo_main() {

    const [todos,setTodos] = useState([
        {
            id: 1,
            text:"Learn about react"
        },
        {
            id: 2,
            text:"Meet a friend for dinner"
        },
        {
            id: 3,
            text:"Build the App"
        },
        {
            id: 4,
            text:"Walk the dog"
        },{
            id: 5,
            text:"Pick up the Laundry"
        }
    ])

    const [todo, setTodo] = useState("");

    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});

    function handleInputChange(e) {
        setTodo(e.target.value);
      }
    
      // function to get the value of the edit input and set the new state
      function handleEditInputChange(e) {
        setCurrentTodo({ ...currentTodo, text: e.target.value });
        console.log(currentTodo);
      }
    
      function handleFormSubmit(e) {
        e.preventDefault();
    
        if (todo !== "") {
          setTodos([
            ...todos,
            {
              id: todos.length + 1,
              text: todo.trim()
            }
          ]);
        }
    
        setTodo("");
      }
    
      function handleEditFormSubmit(e) {
        e.preventDefault();
    
        handleUpdateTodo(currentTodo.id, currentTodo);
      }
    
      function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(removeItem);
      }
    
      // function to edit a todo item
      function handleUpdateTodo(id, updatedTodo) {
        const updatedItem = todos.map((todo) => {
          return todo.id === id ? updatedTodo : todo;
        });
        // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
        setIsEditing(false);
        setTodos(updatedItem);
      }
    
      // function to handle when the "Edit" button is clicked
      function handleEditClick(todo) {
        setIsEditing(true);
        setCurrentTodo({ ...todo });
      }
    
    return (  
        <React.Fragment>
           <div className="Todo-app">
               <div className="todo-input">
                <h2 className="h1">My TODO</h2>
                        {
                            isEditing ? (
                                <form onSubmit={handleEditFormSubmit}>
                                    <div>
                                        <input 
                                            name="editTodo"
                                            type="text"
                                            placeholder="Edit todo"
                                            value={currentTodo.text}
                                            onChange={handleEditInputChange}
                                        />
                                        <button className="btn btn-success" type="submit">Update</button>
                                        <button className="btn  btn-danger" onClick={()=>setIsEditing(false)}>Cancel</button>
                                    </div>
                                </form>
                            ) :
                            (
                            <form onSubmit={handleFormSubmit}>
                                <div>
                                        <input
                                                name="todo"
                                                type="text"
                                                placeholder="Create a new Todo"
                                                value={todo}
                                                onChange={handleInputChange}
                                        />
                                        <button className="btn btn-success" type="submit">Add</button>
                                    
                                </div>
                            </form>
                            )
                        
                    }
                </div>
                <table className="todo-list table-dark">
                    {
                        todos.map((todo) =>(
                            <tr>
                               <td> {todo.text}</td>
                               <td> <button className="btn btn-warning" onClick={()=>handleEditClick(todo)}>Edit</button></td>
                               <td> <button className="btn btn-danger" onClick={()=>handleDeleteClick(todo.id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </table>
           </div>
        </React.Fragment>
    );
}

export default Todo_main;