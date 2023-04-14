import axios from 'axios'

export const fetchUsers = () => {
    return axios.get(`https://randomuser.me/api/?seed=bristol&page=1&results=10`)
    .then(({data:{info, results}}) => {
        return results
    })
}
    