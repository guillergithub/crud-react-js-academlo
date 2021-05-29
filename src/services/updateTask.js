import axios from 'axios'

const URL_BASE = 'https://todos-go.herokuapp.com/api/todos'

const updateTask = (id, task) => {  

    const promise = axios.put(`${URL_BASE}/${id}` , task)

    return promise
} 

export default updateTask