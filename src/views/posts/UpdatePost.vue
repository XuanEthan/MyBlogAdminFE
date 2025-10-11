<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import { useToast } from 'vue-toastification'

const route = useRoute()
const router = useRouter()
const postStore = usePostStore()
const toast = useToast()

// Biến reactive để lưu dữ liệu post
const post = reactive({
    id: null,
    title: '',
    paragraph: '',
    created: ''
})

// Reactive để lưu lỗi nhập liệu
const inputErrorMessages = reactive({
    Title: [],
    Paragraph: []
})

// Hàm cập nhật bài viết
async function handleUpdate() {
    try {
        await postStore.updatePost(post.id, post.title, post.paragraph, post.created)
        toast.success('Updated successfully!')
        router.back()
    } catch (e) {
        console.log(e.response?.data)

        // Lỗi nghiệp vụ (validation)
        if (e.response?.data?.errors) {
            Object.assign(inputErrorMessages, e.response.data.errors)
        }
    }
}

// Khi component mount → load bài viết cần chỉnh sửa
onMounted(async () => {
    try {
        const resp = await postStore.getById(Number(route.params.id))
        console.log(resp)
        Object.assign(post, resp)
    } catch (e) {
        router.push('/NotFound')
    }
})
</script>

<template>
    <form @submit.prevent="handleUpdate">
        <input type="text" name="title" placeholder="Title" v-model="post.title" />
        <i v-if="inputErrorMessages.Title?.length" class="error-msg">
            {{ inputErrorMessages.Title[0] }}
        </i>

        <textarea placeholder="Paragraph" name="paragraph" v-model="post.paragraph"></textarea>
        <i v-if="inputErrorMessages.Paragraph?.length" class="error-msg">
            {{ inputErrorMessages.Paragraph[0] }}
        </i>

        <input type="submit" value="Save" />
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