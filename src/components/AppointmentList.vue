<template>
  <div class="col-12 col-md-10 col-lg-7">
    <div
      class="text-center mt-2 font-weight-bold text-info text-uppercase"
      v-cloak
      v-if="appointments.length == 0"
    >No appointment</div>
    <div class="list-group list-group-flush">
      <div
        class="list-group-item d-flex align-items-start"
        v-for="appointment in appointments"
        :key="appointment.aptId"
      >
        <button class="btn btn-danger btn-sm mr-2" @click="$emit('delete', appointment)">
          <font-awesome-icon icon="trash" />
        </button>
        <div class="w-100">
          <div class="d-flex justify-content-between">
            <!-- <span
              class="h4 text-primary"
              contenteditable="contenteditable"
              @blur="$emit('edit', appointment.aptId, 'petName', $event.target.innerText)"
            >{{ appointment.petName }}</span> -->
            <span class="float-right">{{ formatedDate(appointment.aptDate) }} ~ {{ formatedDate(appointment.endDate) }}</span>
          </div>
          <div class="owner-name">
            <span class="font-weight-bold text-primary mr-1">Owner:</span>
            <span
              contenteditable="contenteditable"
              @blur="$emit('edit', appointment.aptId, 'petOwner', $event.target.innerText)"
            >{{ appointment.petOwner }}</span>
          </div>
          <div
            contenteditable="contenteditable"
            @blur="$emit('edit', appointment.aptId, 'aptNotes', $event.target.innerText)"
          >{{ appointment.aptNotes }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";

export default {
  name: "AppointmentList",
  props: {
    appointments: Array
  },
  components: {
    FontAwesomeIcon
  },
  methods: {
    formatedDate: function(date) {
      return moment(new Date(date)).format("YY-MM-DD, h:mm a");
    }
  }
};
</script>

<style>
</style>