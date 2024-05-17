<script setup>
import { onMounted, ref, watch } from 'vue'

import Header from "./components/header.vue";
import Main_block  from "./components/main_block.vue"
import Benefits from "./components/benefits.vue";
import Services from "./components/services.vue"
import Reviews from "./components/reviews.vue";
import Consultation from "./components/consultation.vue";
import Footer from "./components/footer.vue"
import AppointmentPopUp from "./components/appointmentPopUp.vue";
import MapSection from './components/mapSection.vue';

const isShowAppointment = ref(false)

const isShowComponent = (value) => {
  isShowAppointment.value = value
}

const scrollToComponent = (component) => {
    const element = document.getElementById(component);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

}
const setBodyOverflow = (value) => {
    document.body.style.overflow = value ? 'hidden' : '';
}

watch(isShowAppointment, setBodyOverflow);

onMounted(()=>{
  scrollToComponent('header')
})
</script>

<template>
  <Header @scroll:to="scrollToComponent"/>
  <Main_block @open="isShowComponent(true)"/>
  <MapSection/>
  <Benefits/>
  <Services @open="isShowComponent(true)"/>
  <Reviews/>
  <Consultation/>
  <Footer @scroll:to="scrollToComponent"/>
  <AppointmentPopUp v-if="isShowAppointment" @close="isShowComponent(false)"/>
</template>

<style scoped>


</style>
