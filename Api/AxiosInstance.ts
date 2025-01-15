import axios from 'axios'
import { baseUrl } from '../Api/Api'
// import { upload } from '@testing-library/user-event/dist/upload'

    let Axios_Instance=axios.create({
        baseURL:baseUrl
    })

    Axios_Instance.interceptors.request.use(
        async function(config){
            let token = sessionStorage.getItem("authToken")

            if(token){
                config.headers["x-access-token"]=token
            }
            return config
        },

        function(err){
            return Promise.reject(err)
        }
    )
    // export const authDetailsPath=(media)=>{
    //     return baseUrl+`uploads/user/profile_pic/$(media)`;
    // }
export default Axios_Instance