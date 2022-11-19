import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        url: "https://63558817483f5d2df3b63473.mockapi.io/usuarios",
    },
    actions : {
         agregarUsuario ( {commit}, usuario){
            commit('agregarUsuario', usuario)
       },
       
    },
    mutations : {
        async agregarUsuario(state, usuario){
            try {
                let { data : res } = await axios.post(state.url, usuario, { 'content-type' : 'application/json' })
                console.log(res)
              }
              catch(error) {
                console.error('Error en postUsuario', error.message)
              }
        },
    }
})