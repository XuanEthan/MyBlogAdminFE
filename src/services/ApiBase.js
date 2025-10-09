import axios from 'axios'

const apiBase = axios.create({
  baseURL: 'https://localhost:7145/api',
})

apiBase.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})
// xử lý lỗi ở đây
apiBase.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const { response } = error

    if (response) {
      switch (response.status) {
        case 500:
        default:
          throw error
      }
    } else {
    }
  },
)
export default apiBase
