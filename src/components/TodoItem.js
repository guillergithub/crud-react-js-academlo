

const TodoItem = ({ task, user, handleDelete, id, handleEdit, isCompleted }) => {
    
    
    
    return (
        <div className='card card-container'>
            <div>Task: {task}</div>

            <div>User: {user}</div>

            <div className='btn-container'>
                
                <div>
                    <button className='btn btn-warning' onClick={()=>handleEdit(id, task, user)}>Edit</button>
                </div>

                
                <div>
                    <button className='btn btn-danger' onClick={()=>handleDelete(id)}>Delete</button>
                </div>

                <div>
                    <label htmlFor={`status-${user}`}>&nbsp;</label>
                    <input type='checkbox' id={`status-${user}`} value={isCompleted}/>&nbsp;                    
                    
                </div>        
            </div>

        </div>
    )
}

export default TodoItem