import apiBase from './ApiBase'

export async function getAll(searchKey) {
  return await apiBase.get(`/posts?searchKey=${searchKey}`)
}
export async function getById(id) {
  return await apiBase.get(`/posts/${id}`)
}
export async function addPost(post) {
  return await apiBase.post('/posts', post)
}
export async function updatePost(post) {
  return await apiBase.put(`/posts/${post.id}`, post)
}
export async function deletePost(id) {
  return await apiBase.delete(`/posts/${id}`)
}
