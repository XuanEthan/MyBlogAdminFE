<script setup>
import { onMounted, ref } from 'vue';
import { usePostStore } from '@/stores/postStore';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const postStore = usePostStore();

const post = ref({
    id: -1,
    title: '',
    paragraph: '',
    created: ''
})

async function handleUpdate() {
    console.log(post.value)
    await postStore.updatePost(post.value.id, post.value.title, post.value.paragraph, post.value.created)
    router.back()
}

onMounted(() => {
    const id = Number(route.params.id)
    post.value = postStore.posts.find(post => post.id === id)
})

</script>
<template>
    <form v-on:submit.prevent="handleUpdate">
        <input type="text" name="title" placeholder="Add Title" v-model="post.title">
        <textarea type="text" name="paragraph" placeholder="Add Paragraph" v-model="post.paragraph"></textarea>
        <input type="submit" value="Save">
    </form>
</template>
<style scoped>
form {
    padding-top: 50px;
    width: 100%;
    height: 100%;
    position: relative;
}

form input,
form textarea {
    border: none;
}

form input[type="text"],
form textarea {
    display: block;
    width: 100%;
    padding: 6px;
}

form textarea {
    height: 500px;
    resize: none;
}

form input[type="submit"] {
    position: absolute;
    top: 12px;
    right: 0;
    background-color: #3858e9;
    color: white;
    padding: 8px;
}

form input[name="title"] {
    font-size: 30px;
    height: auto;
}

form input[name="paragraph"] {
    font-size: 20px;
    font-weight: lighter;
}
</style>