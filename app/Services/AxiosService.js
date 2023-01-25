
// @ts-ignore
export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com',
    timeout: 8000
})

// @ts-ignore
export const musicApi = axios.create({
    baseURL: 'https://unsandbox.herokuapp.com',
    timeout: 15000
})