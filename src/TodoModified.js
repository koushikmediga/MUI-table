import React, { useState } from 'react';

const TodoModified = () => {
    // const [todos, setTodos] = React.useState[{ id: '', task: '', status: false }];
    const [todos, setTodos] = useState([]);
    const [singleTodo, setSingleTodo] = useState('');

    React.useEffect(() => {
        console.log(todos)
    }, [todos])

    const setStateOfTask = (index) => {
        setTodos(prevTodos => {
            const updatedTodos = [...prevTodos];
            const updatedTodo = { ...updatedTodos[index], status: !updatedTodos[index].status };
            updatedTodos[index] = updatedTodo;
            return updatedTodos;
        });
    };

    const deleteTodo = (index) => {

    }
    

    return (
        <div style={{ height: '100vh' }}>
            <h2 style={{}}>Add Todo</h2>
            <input type='text' onChange={(e) => setSingleTodo(e.target.value)} value={singleTodo} />
            <button onClick={() => {
                singleTodo.length && setTodos([...todos,
                { id: todos.length + 1, task: singleTodo, status: false }]);
                singleTodo.length && setSingleTodo('')
            }}>submit</button>


            {todos.map((item, index) =>
            (<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }} key={index}>
                <input type='checkbox' value={item.status} onClick={() => setStateOfTask(index)} />
                <p>{item.task}</p>
                <button onClick={() => deleteTodo(index)}> delete</button>
            </div>)
            )}

        </div>
    )
}
export default TodoModified;