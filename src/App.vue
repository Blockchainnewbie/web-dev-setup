<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import SectionAbout from './components/SectionAbout.vue'
import SectionProjects from './components/SectionProjects.vue'
import SectionPlayground from './components/SectionPlayground.vue'
import SectionGallery from './components/SectionGallery.vue'
import SectionContact from './components/SectionContact.vue'

// Import Bootstrap and AOS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  })
})
</script>

<template>
  <div>
    <navbar></navbar>
    <section-about></section-about>
    <section-projects></section-projects>
    <section-playground></section-playground>
    <section-gallery></section-gallery>
    <section-contact></section-contact>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap');

:root {
  --neon-cyan: #0ff;
  --neon-pink: #f0f;
  --neon-purple: #a020f0;
  --bg-dark: #0a0a0a;
  --bg-darker: #111;
}

body {
  font-family: 'Orbitron', sans-serif;
  background-color: var(--bg-dark);
  color: #fff;
  margin: 0;
  padding: 0;
}
</style>
