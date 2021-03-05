import axios from 'axios';

const request = axios.create({
    // https://cata-16.herokuapp.com
    baseURL: 'http://localhost:9000'
});

// class AxiosInit {
//     constructor(){
//         this.axios = axios.create({
//             baseURL: 'http://localhost:9000'
//         });
//     }

//     async getConversations(token){
//        return await this.axios.get('/all/conversations', {
//            headers: {
//                 'Authorization': `Bearer ${token}`
//            }
//        })
//     }
// }

export default request;

