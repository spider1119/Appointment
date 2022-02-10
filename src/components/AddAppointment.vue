<template>
  <div class="col-12 col-md-10 col-lg-7">
    <div class="card textcenter mt-3">
      <div class="card-header bg-primary text-white" @click="hidepanel=!hidepanel">
        <font-awesome-icon icon="plus" class="mr-3" />Add Appointment
      </div>

      <transition name="fade">
        <div class="card-body animated zoomIn" v-if="!hidepanel">
          <form id="aptForm" @submit.prevent="requestAdd">
            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="petName">Pet Name</label>
              <div class="col-md-10">
                <input
                  type="text"
                  class="form-control"
                  name="petName"
                  id="petName"
                  placeholder="Pet's Name"
                  v-model="formData.petName"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="ownerName">Pet Owner</label>
              <div class="col-md-10">
                <input
                  type="text"
                  class="form-control"
                  id="ownerName"
                  placeholder="Owner's Name"
                  v-model="formData.ownerName"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="aptDate">Start Date</label>
              <div class="col-md-4">
                <input type="date" class="form-control" id="aptDate" v-model="formData.aptDate" />
              </div>
              <label class="col-md-2 col-form-label text-md-right" for="startTime">Time</label>
              <div class="col-md-4">
                <input
                  type="time"
                  class="form-control"
                  name="startTime"
                  id="startTime"
                  v-model="formData.startTime"
                />
              </div>
            </div>

            <div class="form-group form-row">
              <label class="col-md-2 col-form-label text-md-right" for="aptDate">End Date</label>
              <div class="col-md-4">
                <input type="date" class="form-control" id="aptDate" v-model="formData.endDate" />
              </div>
              <label class="col-md-2 col-form-label text-md-right" for="endTime">Time</label>
              <div class="col-md-4">
                <input
                  type="time"
                  class="form-control"
                  name="endTime"
                  id="endTime"
                  v-model="formData.endTime"
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
                  v-model="formData.aptNotes"
                ></textarea>
              </div>
            </div>

            <div class="form-group form-row mb-0">
              <div class="offset-md-2 col-md-10">
                <button type="submit" class="btn btn-primary d-block ml-auto">
                  <font-awesome-icon icon="plus" class="mr-2" />Add Appointment
                </button>
              </div>
            </div>
          </form>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AddAppointment",
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      hidepanel: true,
      formData: []
    };
  },
  methods: {
    requestAdd: function() {
      this.formData = {
        petName: this.formData.petName,
        petOwner: this.formData.ownerName,
        aptDate: this.formData.aptDate + " " + this.formData.startTime,
        endDate: this.formData.endDate + " " + this.formData.endTime,
        aptNotes: this.formData.aptNotes
      };
      this.$emit("add", this.formData);
      this.formData = [];
      this.hidepanel = true;
    }
  }
};
</script>

<style scoped>
.card-header {
  cursor: pointer;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
</style>