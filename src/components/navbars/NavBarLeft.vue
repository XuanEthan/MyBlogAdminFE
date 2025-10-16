<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar navbar-left">
        <div class="logo">MyBlog</div>
        <RouterLink to="/">
            <i class="fa-solid fa-gauge"></i> Dashboard
        </RouterLink>
        <RouterLink to="/Posts" @click="toggleDropdown">
            <i class="fa-solid fa-file-alt"></i> Posts
        </RouterLink>
        <RouterLink to="/Categories"> <i class="fa-solid fa-list"></i> Categories
        </RouterLink>
        <RouterLink to="/Tags"> <i class="fa-solid fa-tags"></i> Tags</RouterLink>
    </nav>
</template>

<style scoped>
.navbar-left a {
    display: block;
    padding: 10px 12px;
    font-size: 14px;
    text-decoration: none;
    color: var(--text-color-normal);
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
    width: 250px;
    height: 100%;
}

/* Dropdown nhỏ dưới Posts */
.dropdown {
    background-color: black;
}

.dropdown a {
    font-size: 13px;
    opacity: 0.9;
}
</style>
