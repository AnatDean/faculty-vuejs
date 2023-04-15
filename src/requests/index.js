import axios from 'axios'

export const fetchUsers = (page, params) => {

    return axios.get(`https://randomuser.me/api`, {
       params:{
        seed:'bristol',
         page,
        results: '10',
        ...(params && {inc: params.join(',')})
       }
    })
    .then(({data:{info, results}}) => {
        return results
    })
}
    