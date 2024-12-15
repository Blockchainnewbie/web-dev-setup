<template>
  <section id="playground" class="playground">
    <div class="playground-bg"></div>
    <div class="container position-relative">
      <h2 class="neon-text text-center mb-5" data-aos="fade-up">Digital Playground</h2>
      <div class="row g-4">
        <div class="col-md-4" v-for="(item, index) in playgroundItems" :key="index" data-aos="flip-left" :data-aos-delay="index * 100">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="neon-text-pink">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <a :href="item.link" class="btn btn-neon">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const playgroundItems = [
  {
    title: "Matrix Rain",
    description: "Interactive digital rain effect inspired by The Matrix",
    link: "#"
  },
  {
    title: "Neon Particles",
    description: "WebGL-powered particle system with neon effects",
    link: "#"
  },
  {
    title: "Neural Art",
    description: "AI-generated artwork with cyberpunk aesthetics",
    link: "#"
  }
]
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

.playground-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/playground-image.webp') center/cover no-repeat;
  filter: brightness(0.3);
  z-index: 0;
}

.container {
  z-index: 1;
}

.card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--neon-pink);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px var(--neon-pink);
}

p {
  color: rgba(255, 255, 255, 0.8);
}

.btn-neon {
  margin-top: auto;
}

.card-body {
  display: flex;
  flex-direction: column;
}
</style>
