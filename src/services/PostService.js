import apiBase from './ApiBase'

export async function getAll(searchKey) {
  return await apiBase.get(`/posts?searchKey=${searchKey}`)
}
export async function getById(id) {
  return await apiBase.get(`/posts/${id}`)
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
