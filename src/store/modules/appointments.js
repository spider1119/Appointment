import appointmentService from '../../services/appointmentService'

const state = {
    appointments: []
}

const getters = {
    appointments: state => {
        return state.appointments
    }
}

const actions = {
    getAppointments ({ commit }) {
        appointmentService.fetchAppointments()
        .then(appointments => {
            commit('setAppointments', appointments)
        })
    },
    addAppointment ({ commit }, appointment) {
        appointmentService.postAppointment(appointment)
        .then(() => {
            commit('addAppointment', appointment)
        })
    } ,
    deleteAppointment ({ commit }, msgId) {
        appointmentService.deleteAppointment(msgId)
        commit('deleteAppointment', msgId)
    }
}

const mutations = {
    setAppointments (state, appointments) {
        state.appointments = appointments
    },
    addAppointment (state, appointment) {
        state.appointments.push(appointment)
    },
    deleteAppointment (state, msgId) {
        state.appointments = state.appointments.filter(obj => obj.pk !==msgId)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}