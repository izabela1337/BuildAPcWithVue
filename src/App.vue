<template>
  <div id="app">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="{
        fpsLimit: 30,
        background: {
                        color: {
                            value: '#111111'
                        }},
        particles: {
          color: {
              value: '#ffffff'
          },    
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 2,
            straight: false
              },
          links: {
            color: '#ffffff',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1
              },
            collisions: {
              enable: true
              },}}"
    />
    <div id="content">
      <router-view v-slot="{ Component }"> 
        <transition name="route" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: grid;
}
#tsparticles {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
#content{
  display: grid;
  place-items: center;
  z-index: 1;
  background: none;
  min-height: 95vh;
  max-width: 100%;
  overflow: hidden;
}

.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.6s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.6s ease-in;
}
</style>
