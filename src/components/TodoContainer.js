import CreateTodo from './CreateToDo'
import TodoItem from './TodoItem'
import EditToDo from './EditToDo'


import getTasks from '../services/getTasks'
import createTask from '../services/createTask'
import deleteTask from '../services/deleteTask'
import updateTask from '../services/updateTask'


import { useEffect, useState } from 'react'


const TodoContainer = () => {
    
    const [ tasks, setTasks ] = useState([])
    const [ taskToDelete, setTaskToDelete ] = useState(null)
    const [ newTask, setNewTask ] = useState(null)
    const [ taskToEdit, setTaskToEdit ] = useState(null)
    const [ editingTask, setEditingTask ] = useState(false)
    const [ newTaskValues, setNewTaskValues ] = useState(null)


    //Getting data for the first time
    useEffect(() => {
        getTasks().then(data => {                                       
            setTasks(data.todos)              
        })        
    }, [])


    //UseEffect to DELETE a task
    useEffect(() => {        
        if (taskToDelete) {
            deleteTask(taskToDelete).then(() => {
                setTasks((prev) => {
                    return prev.filter((elem) => elem.id !== taskToDelete)
                })
            })
        }                
    }, [taskToDelete])       



    //UseEffect to CREATE a task
    useEffect(() => {
        if(newTask) {
            createTask(newTask)
                .then(res => {                                           
                    setTasks((prev) => [res.data, ...prev])
                }).catch(err => console.error(err))      
        }
    }, [newTask])        


    //useEffect to EDIT the task (NOT FUNCTIONAL ON THE BACKEND)
    useEffect(() => {
        if(newTaskValues) {
            if(taskToEdit) {                
                updateTask(taskToEdit, newTaskValues).then((res) => {  
                    getTasks(`https://todos-go.herokuapp.com/api/todos/`)
                        .then(res => {                          
                            setTasks(res.todos)
                        })             
                })                    
              
            }
        }
        
    }, [newTaskValues, taskToEdit])



    const handleSubmit = (values) => {        
        setNewTask(values)                  
    }

    const handleDelete = (id) => {       
        setTaskToDelete(id)        
    }
    
    //Taking the id of the selected task and activating the editing form
    const handleEditForm = (id) => {        
        setTaskToEdit(id)
        setEditingTask(true) // Bandera que estamos editando para renderizar otro formulario
       
    }

   
    const handleEdit = (values) => {
        setNewTaskValues(values)        
        setEditingTask(false)       
    }

    
    
    const list = tasks.map((elem, index) => 
        <TodoItem 
            task={elem.task} 
            user={elem.student} 
            key={index} 
            handleDelete={handleDelete} 
            handleEdit={handleEditForm}
            id={elem.id}
            isCompleted={elem.isCompleted}            
        />
    )                                  

    return (
        <>
            {/*  =============== FORMULARY SECTION ============== */}
            
            <div className='col-3'>
                <div className='mt-5'>
                    <h1>Task-U</h1>
                    <p>The best place to organize your tasks! </p>                    
                    
                    { editingTask && <EditToDo onSubmit={handleEdit}/> }
                    { !editingTask && <CreateTodo onSubmit={handleSubmit} />}
                </div>
            </div>

            {/* ================= LIST SECTION ============== */}
            <div className='col-9'>
                {list}
            </div>  
        </>
    )
}

export default TodoContainer