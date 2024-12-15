<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <a class="navbar-brand neon-text" href="#">Portfolio</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#playground">Playground</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
          </li>
          <li class="nav-item">
            <button @click="toggleTheme" class="btn btn-neon ms-3">
              {{ isDarkMode ? '🌞' : '🌙' }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const isDarkMode = ref(true)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  document.body.classList.toggle('light-mode')
}
</script>

<style scoped>
.navbar {
  background-color: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
}

.nav-link {
  color: #fff !important;
  margin: 0 0.5rem;
  transition: all 0.3s ease;
}

.nav-link:hover {
  color: var(--neon-cyan) !important;
  text-shadow: 0 0 10px var(--neon-cyan);
}

.navbar-brand {
  font-size: 1.5rem;
  font-weight: 600;
}

.navbar-toggler {
  border-color: var(--neon-cyan);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}
</style>
