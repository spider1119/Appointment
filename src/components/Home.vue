<template>
  <div id="app">
    <div class="fill-height row">
      <div class="col-sm-1">
        <img src="@/assets/logo.png" width="50px">
      </div>
      <button class="mr-4"
                   color="primary"
                   @click="closeCreationDialog()"
            >Save</button>
      <div class="col-sm-3">
        <vue-cal class="vuecal--blue-theme vuecal--rounded-theme"
                 style="max-width: 270px;height: 290px"
                 active-view="month"
                 xsmall
                 hide-view-selector
                 :time="false"
                 :disable-views="['years', 'year', 'week', 'day']"
                 @cell-focus="selectedDate = $event"
        >
        </vue-cal>
      </div>
      <div class="col-sm-8">
        <vue-cal today-button
                 hide-view-selector
                 sticky-split-labels
                 active-view="day"
                 ref="vuecal"
                 :time-from="0"
                 :time-to="24 * 60"
                 :time-step="30"
                 :time-cell-height="30"
                 :events="events"
                 :selected-date="selectedDate"
                 :disable-views="['years', 'year', 'month', 'week']"
                 :drag-to-create-event="false"
                 :cell-click-hold="false"
                 :min-split-width="150"
                 id="cal"
          >
        </vue-cal>
      </div>
    </div>
  </div>
</template>

<script>
  import 'vue-cal/dist/vuecal.css'
  import VueCal from 'vue-cal'
  import axios from "axios";


  export default {
    name: 'Home',
    data : vm => ({
        events: [],
        selectedDate: null,
        selectedEvent: null,
        
        startDateMenu: false,
        startDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        startDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),

        endDateMenu: false,
        endDate: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        endDateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),

        startTimeModel: false,
        startTime: '09:00',

        endTimeModel: false,
        endTime: '09:00',
      }
    ),
    watch: {
      startDate () {
        this.startDateFormatted = this.formatDate(this.startDate)
      },
      endDate () {
        this.endDateFormatted = this.formatDate(this.endDate)
      },
    },
    components: { VueCal },
    methods : {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
       },

      closeCreationDialog () {
      const aptUrl = "./data/appointments.json";
      axios
      .get(aptUrl)
      .then(
        res =>
          (this.appointments = res.data.map(() => {
            this.showEventCreationDialog = false
            this.events.push({
              start: this.startDate + ' ' + this.startTime,
              end: this.endDate + ' ' + this.endTime,
              title: this.petName,
              content: this.notes,
              class: 'test-class',
              split: this.selectedEvent.split
            })
            this.selectedEvent = {}
          }))
      )
    }
  }
  }
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
  #cal {
    width: 550px;
  }
</style>
