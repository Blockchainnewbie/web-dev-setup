<template>
  <section id="contact" class="contact">
    <div class="contact-bg"></div>
    <div class="container position-relative">
      <h2 class="neon-text text-center mb-5" data-aos="fade-up">Contact Me</h2>
      <div class="row">
        <div class="col-md-6" data-aos="fade-right">
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input type="text" class="form-control" id="name" v-model="form.name" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" v-model="form.email" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" rows="5" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-neon">Send Message</button>
          </form>
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <div class="contact-info">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="neon-text-pink mb-4">Connect With Me</h3>
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-geo-alt me-2"></i>
                  <span>Silicon Valley, CA</span>
                </div>
                <div class="d-flex align-items-center mb-3">
                  <i class="bi bi-envelope me-2"></i>
                  <span>contact@example.com</span>
                </div>
                <div class="social-links mt-4">
                  <a href="#" class="btn btn-neon me-2">GitHub</a>
                  <a href="#" class="btn btn-neon me-2">LinkedIn</a>
                  <a href="#" class="btn btn-neon">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form)
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
section {
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/contact-office.webp') center/cover no-repeat;
  filter: brightness(0.3);
  z-index: 0;
}

.container {
  z-index: 1;
}

.form-control {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--neon-cyan);
  color: #fff;
  backdrop-filter: blur(5px);
}

.form-control:focus {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--neon-pink);
  box-shadow: 0 0 10px var(--neon-pink);
  color: #fff;
}

.card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--neon-pink);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px var(--neon-pink);
}

.social-links .btn {
  transition: all 0.3s ease;
}

.social-links .btn:hover {
  transform: translateY(-3px);
}

.form-label {
  color: var(--neon-cyan);
}
</style>
