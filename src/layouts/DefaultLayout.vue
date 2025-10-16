<script setup>
import { RouterView } from 'vue-router';
import NavBarLeft from '../components/navbars/NavBarLeft.vue';
import NavBarTop from '../components/navbars/NavBarTop.vue';
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
@import "../assets/styles.css";
</style>
