import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { BASE_PATH } from '@client/constants'

let reqCount = 0

const request = axios.create({
    baseURL: BASE_PATH,
    withCredentials: true,
    timeout: 60 * 1000, // 60 seconds
})

const showLoading = () => {
    if (reqCount === 0) {
        // const dom = document.createElement('div')
        // dom.setAttribute('id', 'axios-loading')
        // document.body.appendChild(dom)
        // loading here
        // ReactDOM.render(<Spin tip={i18n.t('common.loading')} size="large" />, dom)
    }
    reqCount++
}

const hideLoading = () => {
    --reqCount
    if (reqCount <= 0) {
        const elementById = document.getElementById('axios-loading')
        elementById && document.body.removeChild(elementById)
    }
}

const handleResponse = (response: AxiosResponse) => {
    hideLoading()
    return response
}
const handleError = (error: AxiosError) => {
    hideLoading()
    // error msg here
    return Promise.reject(error)
}

const handleRequest = (config: AxiosRequestConfig) => {
    showLoading()
    return config
}

request.interceptors.request.use(handleRequest)

request.interceptors.response.use(handleResponse, handleError)

export default request
