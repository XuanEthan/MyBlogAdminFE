<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import { useToast } from 'vue-toastification'
import Editor from '@/components/Editor.vue'
import { PostUpdateDto, PostResponseDto } from '@/models/post'
import { useCategoryStore } from '@/stores/categoryStore'
import { useTagStore } from '@/stores/tagStore'
import { updatePost } from '@/services/PostService'

const route = useRoute()
const router = useRouter()
const toast = useToast()

const postStore = usePostStore()
const categoryStore = useCategoryStore()
const tagStore = useTagStore()

const postUpdate = reactive(new PostUpdateDto())
const post = reactive(new PostResponseDto())

// Reactive để lưu lỗi nhập liệu
const inputErrorMessages = reactive({
    Title: [],
    Paragraph: []
})

// Hàm cập nhật bài viết
async function handleUpdate() {
    try {
        await postStore.updatePost(postUpdate)
        toast.success('Updated successfully!')
        router.back()
    } catch (e) {
        Object.assign(inputErrorMessages, e.response.data.errors)
    }
}

onMounted(async () => {
    try {
        const resp = await postStore.getById(Number(route.params.id))

        await categoryStore.getAll()
        await tagStore.getAll()

        Object.assign(post, resp)

        postUpdate.id = post.id
        postUpdate.title = post.title
        postUpdate.content = post.content
        post.categories.forEach(element => {
            postUpdate.categoryIds.push(element.id)
        });
        post.tags.forEach(element => {
            postUpdate.tagIds.push(element.id)
        })

        console.log(postUpdate)
    } catch (e) {
        router.push('/NotFound')
    }
})
</script>

<template>
    <div class="container">
        <form @submit.prevent="handleUpdate">
            <div class="form-left">
                <input type="text" name="title" placeholder="Title" v-model="postUpdate.title" />
                <i v-if="inputErrorMessages.Title?.length" class="error-msg">
                    {{ inputErrorMessages.Title[0] }}
                </i>

                <editor v-model="postUpdate.content" />
                <i v-if="inputErrorMessages.Content?.length" class="error-msg">
                    {{ inputErrorMessages.Content[0] }}
                </i>
            </div>
            <div class="form-right">
                <!-- Categories -->
                <div class="card">
                    <label>Categories</label>
                    <div class="checkbox-group categories">
                        <label v-for="category in categoryStore.categories" :key="category.id" class="checkbox-item">
                            <input type="checkbox" v-model="postUpdate.categoryIds" :value="category.id" />
                            {{ category.name }}
                        </label>
                    </div>
                </div>

                <!-- Tags -->
                <div class="card">
                    <label>Tags</label>
                    <div class="checkbox-group">
                        <label v-for="tag in tagStore.tags" :key="tag.id" class="checkbox-item">
                            <input type="checkbox" v-model="postUpdate.tagIds" :value="tag.id" />
                            {{ tag.name }}
                        </label>
                    </div>
                </div>
            </div>
            <input type="submit" value="Save" />
        </form>
    </div>
</template>

<style scoped>
@import url('/src/assets/form.css');
</style>