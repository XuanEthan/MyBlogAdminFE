<script setup>
import { onMounted, reactive } from 'vue';

const query = reactive({
    searchKey: ''
})

onMounted(() => {

})

</script>
<template>
    <div class="header">
        <h1>Categories</h1>
    </div>

    <form action="" class="search-form" v-on:submit.prevent="">
        <input type="search" placeholder="Search by Title" v-model="query.searchKey">
        <input type="submit" value="Search">
    </form>
    <div class="container">
        <div class="add-category-form">
            <h2>Add Category</h2>
            <form action="">
                <label for="name">Name</label>
                <input type="text" id="name">
                <label for="description">Description</label>
                <textarea name="description" id="description"></textarea>
                <input type="submit" value="Add Category">
            </form>
        </div>
    </div>

</template>
