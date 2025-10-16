<script setup>
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'
import { useToast } from 'vue-toastification'
import Editor from '@/components/Editor.vue'
import { PostCreateDto } from '@/models/post'
import { useCategoryStore } from '@/stores/categoryStore'
import { useTagStore } from '@/stores/tagStore'


const toast = useToast()
const router = useRouter()

const postStore = usePostStore()
const categoryStore = useCategoryStore()
const tagStore = useTagStore()


const post = reactive(new PostCreateDto())

const inputErrorMessages = reactive({
    Title: [],
    Content: []
})


async function handleAdd() {
    try {
        await postStore.addPost(post)
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

onMounted(() => {
    categoryStore.getAll()
    tagStore.getAll()
})
</script>

<template>
    <div class="container">
        <form @submit.prevent="handleAdd">
            <div class="form-left">
                <input type="text" name="title" placeholder="Title" v-model="post.title" />
                <i v-if="inputErrorMessages.Title?.length" class="error-msg">
                    {{ inputErrorMessages.Title[0] }}
                </i>
                <editor v-model="post.content" />
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
                            <input type="checkbox" v-model="post.categoryIds" :value="category.id" />
                            {{ category.name }}
                        </label>
                    </div>
                </div>

                <!-- Tags -->
                <div class="card">
                    <label>Tags</label>
                    <div class="checkbox-group tags">
                        <label v-for="tag in tagStore.tags" :key="tag.id" class="checkbox-item">
                            <input type="checkbox" v-model="post.tagIds" :value="tag.id" />
                            {{ tag.name }}
                        </label>
                    </div>
                </div>
            </div>

            <input type="submit" value="Publish" />
        </form>
    </div>
</template>

<style scoped>
@import url('/src/assets/form.css');
</style>