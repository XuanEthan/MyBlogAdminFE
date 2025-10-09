<script setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { usePostStore } from '@/stores/postStore';

const postStore = usePostStore();
const search = ref("")

onMounted(async () => {
    postStore.getAll()
})

async function handleDelete(id) {
    postStore.deletePost(id)
}

// async function handleSearch() {
//     postStore.searchByTitle(search.value)
// }

</script>
<template>
    <div class="header">
        <h1>Posts</h1>
        <RouterLink to="/AddPost" class="btn">Add Post</RouterLink>
    </div>

    <form action="" class="search-form" v-on:submit.prevent="handleSearch">
        <input type="search" placeholder="Search by Title" v-model="search">
        <input type="submit" value="Search">
    </form>
    <p style="text-align: end; margin: 0px 0px 6px 0px; font-size: var(--font-size-normal);">{{ postStore.posts.length
        }} items</p>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="post in postStore.posts" :key="post.id">
                <td class="title">
                    <div class="thumbnail">
                        <img :src="post.thumbnail || '/public/favicon.ico'" alt="Ảnh" />
                    </div>
                    <RouterLink :to="`/Post/${post.id}`" class="title-text">
                        {{ post.title }}
                    </RouterLink>
                </td>

                <td>{{ new Date(post.created).toLocaleString() }}</td>

                <td>
                    <RouterLink :to="`/UpdatePost/${post.id}`">Edit</RouterLink> |
                    <a @click.prevent="handleDelete(post.id)" href="#">Delete
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<style scoped>
.header {
    height: 50px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
}

.header h1 {
    font-weight: 500;
    font-size: 24px;
}

a,
form input[type="submit"] {
    color: var(--button-text-color);
}

.header a {
    display: block;
    padding: 8px;
    border: 1px solid var(--button-border-color);
}

.search-form {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6px;
}

.search-form input {
    padding: 8px;
}

.search-form input[type="submit"] {
    border: 1px solid var(--button-border-color);
}

table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
    /* Giúp các cột tuân thủ chiều rộng đã định */
}

th {
    font-size: var(--table-th-font-size);
}

th,
td {
    padding: 8px;
    font-weight: 100;
    vertical-align: middle;
    /* Căn giữa nội dung theo chiều dọc */
}

/* Định nghĩa chiều rộng cho các cột */
table th:nth-child(1) {
    width: 60%;
}

table th:nth-child(2) {
    width: 20%;
}

table th:nth-child(3) {
    width: 20%;
}

/* Căn lề cho các cột */
th:nth-child(1),
td:nth-child(1) {
    text-align: left;
}

th:nth-child(2),
td:nth-child(2) {
    text-align: center;
}

th:nth-child(3),
td:nth-child(3) {
    text-align: center;
}

thead {
    border-bottom: 2px solid #ccc;
}

tbody tr {
    height: 60px;
    border-bottom: 1px solid #eee;
}

/* Hiệu ứng Zebra-stripe giúp dễ đọc hơn */
tbody tr:nth-child(odd) {
    background-color: #f9f9f9;
}

/* 
/* === PHẦN CSS ĐÃ ĐƯỢ̣c TỐI ƯU === */
td.title {
    display: flex;
    align-items: center;
    gap: 12px;
}

.thumbnail {
    width: 80px;
    height: 50px;
    flex-shrink: 0;
    overflow: hidden;
}

.thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.title-text {
    word-break: break-word;
    font-size: 14px;
    font-weight: 500;
}

td:nth-child(2),
td:nth-child(3) {
    font-size: 13px;
}
</style>