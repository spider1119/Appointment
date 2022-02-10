<template>
  <div id="app" class="container">
    <div class="row justify-content-center">
      <AddAppointment @add="addApt" />
      <SearchAppointment
        @searchApts="searchAppointments"
        @requestKey="updateFilterKey"
        @requestDir="updateFilterDir"
        :filterKey="filterKey"
        :filterDir="filderDir"
      />
      <AppointmentList :appointments="filteredApts" @delete="removeItem" @edit="editApt" />
    </div>
  </div>
</template>

<script>
import AppointmentList from "./AppointmentList";
import AddAppointment from "./AddAppointment";
import SearchAppointment from "./SearchAppointment";
import axios from "axios";
import _ from "lodash";

export default {
  name: "App",
  components: {
    AppointmentList,
    AddAppointment,
    SearchAppointment
  },
  data() {
    return {
      appointments: [],
      aptIndex: 0,
      searchTerms: "",
      filterKey: "petName",
      filderDir: "asc"
    };
  },
  methods: {
    removeItem: function(appointment) {
      this.appointments = _.without(this.appointments, appointment);
    },
    editApt: function(id, field, text) {
      const aptIndex = _.findIndex(this.appointments, { aptId: id });
      this.appointments[aptIndex][field] = text;
    },
    addApt: function(apt) {
      apt.aptId = this.aptIndex;
      this.aptIndex++;
      this.appointments.push(apt);
    },
    searchAppointments: function(searchKey) {
      this.searchTerms = searchKey;
    },
    updateFilterKey: function(selectedFilterKey) {
      this.filterKey = selectedFilterKey;
    },
    updateFilterDir: function(selectedFilterDir) {
      this.filderDir = selectedFilterDir;
    }
  },
  computed: {
    searchedApts: function() {
      return this.appointments.filter(item => {
        return (
          item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        );
      });
    },
    filteredApts: function() {
      return _.orderBy(
        this.searchedApts,
        item => {
          return item[this.filterKey].toLowerCase();
        },
        this.filderDir
      );
    }
  },
  mounted() {
    const aptUrl = "./data/appointments.json";
    axios
      .get(aptUrl)
      .then(
        res =>
          (this.appointments = res.data.map(apt => {
            apt.aptId = this.aptIndex;
            this.aptIndex++;
            return apt;
          }))
      )
      .catch(err => console.error(err));
  }
};
</script>
<style>
[v-cloak] {
  display: none;
}
</style>