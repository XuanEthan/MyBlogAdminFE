<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-left">
        <div class="logo">MyBlog</div>
        <RouterLink to="/"><i class="fa-solid fa-gauge"></i> Dashboard</RouterLink>
        <RouterLink to="/Posts"><i class="fa-solid fa-file-alt"></i> Posts</RouterLink>
    </nav>
</template>
<style scoped>
.navbar-left a {
    display: block;
    padding: 10px 12px;
    font-size: 14px;
    text-decoration: none;
    color: var(--text-color-normal);
    transition: all 0.2s;
}

div.logo {
    display: block;
    padding: 16px 13px;
    color: white;
    font-style: italic;
}

.navbar-left a:hover {
    background: var(--bar-hover-clicked);
}

.navbar-left {
    /* padding-top: 40px; */
    width: 250px;
    height: 100%;
}
</style>