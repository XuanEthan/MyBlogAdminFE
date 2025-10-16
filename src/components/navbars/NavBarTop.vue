<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <nav class="navbar navbar-top">
        <div class="Notification">
            <RouterLink to="/Notification"><i class="fa-solid fa-bell"></i></RouterLink>
        </div>
        <p>Hi,Admin</p>
    </nav>
</template>

<style scoped>
.navbar-top {
    width: 100%;
    height: 40px;
    background: var(--navbar-bg-color);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 6px;
    gap: 16px;
}

.navbar-top a {
    font-size: 14px;
    color: white;
}

p {
    color: white;
    font-size: 13px;
    ;
}
</style>