import React, { useState } from 'react';


const Todo = () => {

    // const [todos, setTodos] = React.useState[{ id: '', task: '', status: false }];
    const [todos, setTodos] = useState([]);
    const [singleTodo, setSingleTodo] = useState('');

    const addTaskForATodo = (task) => {
        setSingleTodo(task);
    }

    React.useEffect(() => {
        console.log(singleTodo)
    }, [singleTodo]);

    return (
        <div style={{  height: '100vh' }}>
            <h2 style={{ }}>Add Todo</h2>
            <input type='text' onChange={(e) => addTaskForATodo(e.target.value)} />
            <button onClick={() => { setTodos([...todos, singleTodo]); setSingleTodo('') }} >submit</button>


            {todos.map((item, index) => (<li style={{ }} key={index}>{item}</li>))}
        </div>
    )


}


export default Todo;