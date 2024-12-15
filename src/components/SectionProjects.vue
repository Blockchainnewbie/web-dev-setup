<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="neon-text text-center mb-5" data-aos="fade-up">Featured Projects</h2>
      <div class="row" data-aos="zoom-in">
        <div class="col-12">
          <div id="projectCarousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="0" class="active"></button>
              <button type="button" data-bs-target="#projectCarousel" data-bs-slide-to="1"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="../assets/images/project1-cyber-dashboard.webp" class="d-block w-100" alt="Cyber Dashboard">
                <div class="carousel-caption">
                  <h3 class="neon-text">Cyber Dashboard</h3>
                  <p>A futuristic dashboard for monitoring system metrics</p>
                  <button class="btn btn-neon">View Project</button>
                </div>
              </div>
              <div class="carousel-item">
                <img src="../assets/images/project2-neural-network-visualizer.png" class="d-block w-100" alt="Neural Network Visualizer">
                <div class="carousel-caption">
                  <h3 class="neon-text">Neural Network Visualizer</h3>
                  <p>Interactive visualization of neural network architecture</p>
                  <button class="btn btn-neon">View Project</button>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
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
}

.carousel-item {
  height: 70vh;
}

.carousel-item img {
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.carousel-caption {
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border: 1px solid var(--neon-cyan);
  border-radius: 10px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: var(--neon-cyan);
  border-radius: 50%;
  padding: 2rem;
}

.carousel-indicators button {
  background-color: var(--neon-cyan);
}
</style>
