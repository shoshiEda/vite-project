/* eslint-disable react/prop-types */
function Todos({todo,markAsCompleted}){

    return(
        <div className="todo">
            <div>
            <p>title:{todo.title}</p>
            <p>completed: {todo.completed?"true":"false"}</p>
            </div>
            {!todo.completed && <button onClick={()=>markAsCompleted(todo.id,todo.userId)}> mark as completed</button>}

        </div>
    )
}

export default Todos