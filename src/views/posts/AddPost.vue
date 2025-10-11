<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import { useToast } from 'vue-toastification'

const toast = useToast()
const router = useRouter()
const postStore = usePostStore()

const post = reactive({
    title: '',
    paragraph: ''
})

const inputErrorMessages = reactive({
    Title: [],
    Paragraph: []
})

async function handleAdd() {
    try {
        await postStore.addPost(post.title, post.paragraph)
        toast.success('Added successfully !')
        router.back()
    } catch (e) {
        console.log(e.response?.data)
        if (e.response?.data?.errors) {
            Object.assign(inputErrorMessages, e.response.data.errors)
        } else {
            console.error(e)
        }
    }
}
</script>

<template>
    <form @submit.prevent="handleAdd">
        <input type="text" name="title" placeholder="Title" v-model="post.title" />
        <i v-if="inputErrorMessages.Title?.length" class="error-msg">
            {{ inputErrorMessages.Title[0] }}
        </i>

        <textarea placeholder="Paragraph" name="paragraph" v-model="post.paragraph"></textarea>
        <i v-if="inputErrorMessages.Paragraph?.length" class="error-msg">
            {{ inputErrorMessages.Paragraph[0] }}
        </i>

        <input type="submit" value="Publish" />
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
    height: 400px;
    resize: none;
}

form input[type="submit"] {
    position: absolute;
    top: 12px;
    right: 0;
    background-color: #3858e9;
    color: white;
    padding: 8px;
    cursor: pointer;
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