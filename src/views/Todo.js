const Todo = (props) => {

    const { todos, title, deleteDataTodo } = props

    const handleDelete = (id) => {
        deleteDataTodo(id)
    }

    return (

        <div className='todos-container'>
            <div className="title">
                {title}
            </div>
            {todos.map(item => {
                return (
                    <div key={item.id}>
                        <li className='child-todo'>{item.title}
                            &nbsp;  <span onClick={() => handleDelete(item.id)}>x</span>
                        </li>
                    </div>

                )
            })}
            <hr />
        </div >
    )
}

export default Todo;