import apiBase from './ApiBase'

export async function getAll() {
  return await apiBase.get('/posts')
}

export async function addPost(title, paragraph) {
  return await apiBase.post('/posts', { title, paragraph })
}
export async function updatePost(id, title, paragraph, created) {
  return await apiBase.put(`/posts/${id}`, { id, title, paragraph, created })
}
export async function deletePost(id) {
  return await apiBase.delete(`/posts/${id}`)
}
