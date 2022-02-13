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
      <div class="card-body animated zoomIn">
          <div id="aptForm">
            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="user">User</label>
              <div class="col-md-10">
                <input
                  type="text"
                  class="form-control"
                  name="user"
                  id="user"
                  placeholder="Pet's Name"
                  v-model="user"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="petOwner">Pet Owner</label>
              <div class="col-md-10">
                <input
                  type="text"
                  class="form-control"
                  id="petOwner"
                  placeholder="Owner's Name"
                  v-model="petOwner"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="aptDate">Start Date</label>
              <div class="col-md-4">
                <input type="date" class="form-control" id="startDate" v-model="startDate" />
              </div>
              <label class="col-md-2 col-form-label text-md-right" for="startTime">Time</label>
              <div class="col-md-4">
                <input
                  type="time"
                  class="form-control"
                  name="startTime"
                  id="startTime"
                  v-model="startTime"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="endDate">End Date</label>
              <div class="col-md-4">
                <input type="date" class="form-control" id="endDate" v-model="endDate" />
              </div>
              <label class="col-md-2 col-form-label text-md-right" for="endTime">Time</label>
              <div class="col-md-4">
                <input
                  type="time"
                  class="form-control"
                  name="endTime"
                  id="endTime"
                  v-model="endTime"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 text-md-right" for="aptNotes">Apt. Notes</label>
              <div class="col-md-10">
                <textarea
                  class="form-control"
                  rows="4"
                  cols="50"
                  name="aptNotes"
                  id="aptNotes"
                  placeholder="Appointment Notes"
                  v-model="aptNotes"
                ></textarea>
              </div>
            </div>

            <div class="form-group form-row mb-0">
              <div class="offset-md-2 col-md-10">
                <input 
                  type="submit" 
                  class="btn btn-primary d-block ml-auto" 
                  value="Add"
                  @click="addAppointment({ 
                    user: user, 
                    petOwner: petOwner, 
                    startDate: startDate,
                    startTime: startTime,
                    endDate: endDate,
                    endTime: endTime,
                    aptNotes: aptNotes })" 
                  :disabled="!user || !petOwner || !aptNotes" 
                />
              </div>
            </div>
          </div>
        </div>
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
            startDate: "",
            startTime: "",
            endDate: "",
            endTime: "",
            aptNotes: "",
            };
        },
    computed: mapState({
      appointments: state => state.appointments.appointments
    }),
    methods: mapActions('appointments', [
      'addAppointment',
      'deleteAppointment'
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
