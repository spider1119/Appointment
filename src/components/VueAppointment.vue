<template>
  <div id="app">
    <div>   
      <hr/>
      <div>
          <h3>Appointments on Database</h3>
          <div class="appointment">
              <p v-if="appointments.length === 0">No Appointments</p>
              <div class="appointment" v-for="(appointment, index) in appointments" :key="index">
                  <p class="appointment-subject" v-html="appointment.user"></p>
                  <p class="appointment-body" v-html="appointment.aptNotes"></p>
                  <p class="appointment-body" v-html="appointment.pk"></p>
                  <input 
                    type="submit" 
                    class="btn btn-danger btn-sm mr-2" 
                    @click="deleteAppointment(appointment.pk)" 
                    value="X" />
              </div>
          </div>
      </div>
      <!-- <div class="appointment">
          <h3>Add Appointment</h3> -->
          <!-- <p>Owner</p>
          <input type="text" placeholder="Hello" v-model="owner" class="appointment-index">
          <p>AptNotes</p>
          <input type="text" placeholder="This is ...." v-model="aptNotes" class="appointment-index">
          <br><br>
          <input 
              type="submit" 
              value="Add" 
              class="addbtn"
              @click="addAppointment({ owner, aptNotes })" 
              :disabled="!owner || !aptNotes  "
          >     -->
      <!-- </div>        -->
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    name: 'VueAppointment',
        data() {
            return {
            user: "",
            petOwner: "",
            starttime: "",
            duration: "",
            aptNotes: "",
            };
        },
    computed: mapState({
      appointments: state => state.appointments.appointments
    }),
    methods: mapActions('appointments', [
      'deleteMessage'
    ]),
    created() {
      this.$store.dispatch('appointments/getAppointments')
    }
  };
</script>

<style>
  #app {
    padding-top: 50px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  #nav {
    font-size: 20px;
    color: pink;
  }
  #date {
    width: 30%;
  }
</style>
