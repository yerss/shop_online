import axios from "axios";



export default {
    SIGN_UP({commit},data){
        return axios.post(`api/register`, data)
            .then(response => {
                commit('SAVE_TOKEN', response.data)
                return response
            })
    },
    SIGN_IN({commit},data){
        return axios.post(`api/login`, data)
            .then(response => {
                commit('SAVE_TOKEN', response.data)
                return response
            })
    }

}