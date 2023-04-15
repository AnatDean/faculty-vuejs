import axios from 'axios'

export const fetchUsers = (page, n=10, params) => {

    return axios.get(`https://randomuser.me/api`, {
       params:{
        seed:'bristol',
         page,
        results: n,
        ...(params && {inc: params.join(',')})
       }
    })
    .then(({data:{info, results}}) => {
        return results
    })
}
    