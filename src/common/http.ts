import axios from 'axios'

/**
 * http
 */
const http = axios.create({
    baseURL: process.env.VUE_APP_BASEURL,
    timeout: 10000,
})

/**
 * 测试
 * @param url 址址
 * @returns
 */
// function Test(url: string): string {
//     return `this is Test funtion ${url}`
// }

// export { instance }
export default http
