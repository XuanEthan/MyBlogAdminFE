import axios from 'axios'
import router from '@/router'

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
        case 400:
          break
        case 403:
        case 404:
          router.push('/NotFound')
          break
        case 500:
          router.push('/InternalServerError')
          break
        case 503:
        case 504:
        default:
          console.error('Unhandled System Error ' + response)
          break
      }
    } else {
      console.error('Undefined Error ' + response)
    }
    return Promise.reject(error)
  },
)
export default apiBase
