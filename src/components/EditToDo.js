import { useForm } from 'react-hook-form'

const EditToDo = ({ onSubmit }) => {
    
    const { register, handleSubmit } = useForm();  


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className='mt-5 input-container'>
                <label htmlFor='task-input'>Edit task</label>
                <input placeholder='Add a task here...' id='task-input' { ...register('task') } className='input'/>
            </div>
            <div className='mt-3 input-container'>
                <label htmlFor='user-input'>Edit student</label>
                <input placeholder='Add a student here...' id='user-input' { ...register('student')} className='input'/>
            </div>


            <button  className='btn btn-primary mt-3'>
                Save Changes
            </button>
        </form>
    )
}

export default EditToDo;