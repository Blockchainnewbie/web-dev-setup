<template>
  <section id="about" class="about">
    <div class="hero-bg"></div>
    <div class="container position-relative">
      <div class="row align-items-center">
        <div class="col-md-6" data-aos="fade-right">
          <h2 class="neon-text mb-4">About Me</h2>
          <p class="lead">Exploring the digital frontier as a full-stack developer, crafting immersive web experiences with cutting-edge technology.</p>
          <p>With a passion for cyberpunk aesthetics and modern web development, I create unique digital experiences that push the boundaries of conventional design.</p>
          <div class="mt-4">
            <button class="btn btn-neon me-3">Download CV</button>
            <button class="btn btn-neon">My Skills</button>
          </div>
        </div>
        <div class="col-md-6" data-aos="fade-left">
          <div class="card">
            <div class="card-body">
              <h3 class="neon-text-pink">Tech Stack</h3>
              <div class="d-flex flex-wrap gap-2 mt-3">
                <span class="badge bg-dark border border-info">Vue.js</span>
                <span class="badge bg-dark border border-info">React</span>
                <span class="badge bg-dark border border-info">Node.js</span>
                <span class="badge bg-dark border border-info">Python</span>
                <span class="badge bg-dark border border-info">MongoDB</span>
                <span class="badge bg-dark border border-info">AWS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('../assets/images/hero-image.webp') center/cover no-repeat;
  filter: brightness(0.3);
  z-index: 0;
}

.container {
  z-index: 1;
}

.card {
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--neon-cyan);
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 20px var(--neon-cyan);
}

.badge {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
}

.badge:hover {
  box-shadow: 0 0 10px var(--neon-cyan);
  transform: translateY(-2px);
}

p {
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
