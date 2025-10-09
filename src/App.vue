<script setup>
import { RouterView } from 'vue-router';
import NavBarLeft from './components/NavBarLeft.vue';
import NavBarTop from './components/NavBarTop.vue';
</script>

<template>
  <div class="container">
    <NavBarLeft />

    <main>
      <NavBarTop />
      <div class="content">
        <RouterView />
      </div>
    </main>

  </div>
</template>

<style>
@import "/src/assets/styles.css";
</style>
