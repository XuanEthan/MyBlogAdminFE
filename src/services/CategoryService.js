import apiBase from './ApiBase'

export async function getAll(searchKey) {
  return await apiBase.get(`/categories?searchKey=${searchKey}`)
}
