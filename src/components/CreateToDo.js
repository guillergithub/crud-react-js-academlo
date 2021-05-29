import { useForm } from 'react-hook-form'

const CreateTodo = ({ onSubmit }) => {
    
    const { register, handleSubmit } = useForm();  


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className='mt-5 input-container'>
                <label htmlFor='task'>Add task</label>
                <input placeholder='Add a task here...' id='task' { ...register('task') } className='input'/>
            </div>
            <div className='mt-3 input-container'>
                <label htmlFor='user'>Add student</label>
                <input placeholder='Add a student here...' id='user' { ...register('student')} className='input'/>
            </div>


            <button  className='btn btn-primary mt-3'>
                Add task
            </button>
        </form>
    )
}

export default CreateTodo;