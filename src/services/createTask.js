import axios from 'axios'

const URL_BASE = 'https://todos-go.herokuapp.com/api/todos'

const createTask = (task) => {

    const promise = axios({
        method: 'POST',
        url: `${URL_BASE}`,
        data: task
      })
    
       
    return promise

}

export default createTask;
