const URL_BASE = 'https://todos-go.herokuapp.com/api/todos'

const getTasks = () => {

    const promise = fetch(URL_BASE)
                        .then(res => res.json())

    return promise


}

export default getTasks