import axios from 'axios'

const URL_BASE = 'https://todos-go.herokuapp.com/api/todos'

const deleteTask = (id) => {


    const promise = axios({
        url: `${URL_BASE}/${id}`,
        method: 'DELETE'
    })

    return promise 
}

export default deleteTask;