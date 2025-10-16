import apiBase from './ApiBase'

export async function getAll(searchKey) {
  return await apiBase.get(`/tags?searchKey=${searchKey}`)
}
