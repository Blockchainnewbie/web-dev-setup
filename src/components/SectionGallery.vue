<template>
  <section id="gallery" class="gallery">
    <div class="container">
      <h2 class="neon-text text-center mb-5" data-aos="fade-up">Photo Gallery</h2>
      <div class="row g-4">
        <div class="col-md-4" v-for="(photo, index) in photos" :key="index" data-aos="zoom-in" :data-aos-delay="index * 100">
          <div class="gallery-item" @click="showPhoto(index)">
            <img :src="photo.url" :alt="photo.title" class="gallery-image">
            <div class="gallery-overlay">
              <h4 class="neon-text">{{ photo.title }}</h4>
              <p>{{ photo.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import neonCity from '../assets/images/gallery-neon-city.webp'
import digitalDreams from '../assets/images/gallery-digital-dreams.webp'
import cyberReality from '../assets/images/gallery-cyber-reality.webp'
import virtualSpace from '../assets/images/gallery-virtual-space.webp'
import techVision from '../assets/images/gallery-tech-vision.webp'
import futureWorld from '../assets/images/gallery-future-world.webp'

const photos = [
  {
    url: neonCity,
    title: 'Neon City',
    description: 'A glimpse into the future'
  },
  {
    url: digitalDreams,
    title: 'Digital Dreams',
    description: 'Where reality meets virtual'
  },
  {
    url: cyberReality,
    title: 'Cyber Reality',
    description: 'The intersection of human and machine'
  },
  {
    url: virtualSpace,
    title: 'Virtual Space',
    description: 'Exploring digital dimensions'
  },
  {
    url: techVision,
    title: 'Tech Vision',
    description: 'Tomorrow\'s technology today'
  },
  {
    url: futureWorld,
    title: 'Future World',
    description: 'A world of endless possibilities'
  }
]

const showPhoto = (index) => {
  console.log('Show photo:', photos[index])
}
</script>

<style scoped>
section {
  padding: 100px 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.gallery-item {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border: 1px solid var(--neon-cyan);
  transition: all 0.3s ease;
  aspect-ratio: 1;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image {
  transform: scale(1.1);
}

.gallery-item:hover {
  box-shadow: 0 0 20px var(--neon-cyan);
}

.gallery-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  transform: translateY(0);
}

.gallery-overlay p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>
