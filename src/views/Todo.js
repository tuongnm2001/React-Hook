const Todo = (props) => {
    const todos = props.todos;
    return (
        <div className='todos-container'>
            <div className="title">
                {props.title}
            </div>
            {todos.map(item => {
                return (
                    <li className='child-todo' key={item.id}>{item.title}</li>
                )
            })}
            <hr />
        </div>
    )
}

export default Todo;