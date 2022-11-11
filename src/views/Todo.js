const Todo = (props) => {
    const todos = props.todos;
    return (
        <div className='todos-container'>
            {todos.map(item => {
                return (
                    <li className='child-todo' key={item.id}>{item.title}</li>
                )
            })}
        </div>
    )
}

export default Todo;