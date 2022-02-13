import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home'
import Appointments from '@/components/Appointments'
import VueAppointment from '@/components/VueAppointment'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/appointments',
            name: 'appointments',
            component: Appointments
        },
        {
            path: '/vueappointment',
            name: 'vueappointment',
            component: VueAppointment
        }
    ]
})