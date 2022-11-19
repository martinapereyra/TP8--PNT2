import Vue from "vue";
import VueRouter from "vue-router"

/* Componentes para rutas */
import FormularioAv from './componentes/FormularioAv.vue';
import MockApi from './componentes/Mockapi.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/formulario'},
        {path : '/formulario' , component: FormularioAv },
        {path : '/mockapi' , component: MockApi }

    ]

})