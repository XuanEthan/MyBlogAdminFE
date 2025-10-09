<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-left">
        <RouterLink to="/"><i class="fa-solid fa-gauge"></i> Dashboard</RouterLink>
        <RouterLink to="/Posts"><i class="fa-solid fa-file-alt"></i> Posts</RouterLink>
    </nav>
</template>
<style scoped>
.navbar-left a {
    display: block;
    padding: 10px 12px;
    cursor: pointer;
    font-size: 14px;
    text-decoration: none;
    color: var(--text-color-normal);
    transition: all 0.2s;
}


.navbar-left a:hover {
    background: var(--bar-hover-clicked);
}

.navbar-left {
    padding-top: 40px;
    width: 250px;
    height: 100%;
}
</style>