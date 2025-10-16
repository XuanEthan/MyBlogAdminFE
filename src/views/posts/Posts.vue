<script setup>
import { onMounted, reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { usePostStore } from '@/stores/postStore';
import router from '@/router';
import { useToast } from 'vue-toastification'

const toast = useToast()
const postStore = usePostStore();

const query = reactive({
    searchKey: ""
})

onMounted(() => {
    postStore.getAll(query.searchKey)
})

async function handleDelete(id) {
    if (!confirm('Delete this Post ?')) return
    try {
        await postStore.deletePost(id)
        toast.success('Deleted successfully !')
    } catch (e) {
        router.push("/NotFound")
    }
}

async function handleSearch() {
    console.log(query.searchKey)
    await postStore.getAll(query.searchKey)
}

</script>
<template>
    <div class="header">
        <h1>Posts</h1>
        <RouterLink to="/AddPost" class="btn">Add Post</RouterLink>
    </div>

    <form action="" class="search-form" v-on:submit.prevent="handleSearch">
        <input type="search" placeholder="Search by Title" v-model="query.searchKey">
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
            <!-- Nếu có bài viết -->
            <tr v-for="post in postStore.posts" :key="post.id" v-if="postStore.posts.length > 0">
                <td class="title">
                    <div class="thumbnail">
                        <img :src="post.thumbnail || '/public/Screenshot 2025-10-11 215007.png'" alt="Ảnh" />
                    </div>
                    <RouterLink :to="`/UpdatePost/${post.id}`" class="title-text">
                        {{ post.title }}
                    </RouterLink>
                </td>

                <td>{{ new Date(post.created).toLocaleString() }}</td>

                <td>
                    <RouterLink :to="`/UpdatePost/${post.id}`">Edit</RouterLink> |
                    <a @click.prevent="handleDelete(post.id)" href="#">Delete</a>
                </td>
            </tr>

            <tr v-else>
                <td colspan="3" style="font-size: 13px; text-align: center;">
                    <i>Not found any posts.</i>
                </td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>
</template>
<style scoped>
@import url("/src/assets/list.css");
</style>