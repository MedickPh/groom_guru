<script setup>
import { ref } from 'vue'

import Header from "./components/header.vue";
import Main_block  from "./components/main_block.vue"
import Benefits from "./components/benefits.vue";
import Services from "./components/services.vue"
import Reviews from "./components/reviews.vue";
import Consultation from "./components/consultation.vue";
import Footer from "./components/footer.vue"
import AppointmentPopUp from "./components/appointmentPopUp.vue";

const isShowAppointment = ref(true)

const isShowComponent = (value) => {
  isShowAppointment.value = value
}
</script>

<template>
  <Header/>
  <Main_block @open="isShowComponent(true)"/>
  <Benefits/>
  <Services @open="isShowComponent(true)"/>
  <Reviews/>
  <Consultation/>
  <Footer/>
  <AppointmentPopUp v-if="isShowAppointment" @close="isShowComponent(false)"/>
</template>

<style scoped>


</style>
