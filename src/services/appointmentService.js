import api from '@/services/api'

export default {
    fetchAppointments() {
        return api.get('/post/meeting')
                  .then(response => response.data)
    },
    postAppointment(payload) {
        return api.post('/post/meeting', payload)
                  .then(response => response.data)
    },
    deleteAppointment(msgId) {
        return api.delete(`post/meting/${msgId}`)
                  .then(response => response.data)
    }
}