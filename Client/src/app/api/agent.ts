import axios, { AxiosError, AxiosResponse } from "axios";
import { router } from '../router/Routes';
import { Guest } from "../models/guests";

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(async response => {
    if (import.meta.env.DEV) await sleep();
    return response
}, (error: AxiosError) => {
    const {data, status} = error.response as AxiosResponse;
    switch (status) {
        case 400:
            if (data.errors) {
                const modelStateErrors: string[] = [];
                for (const key in data.errors) {
                    if (data.errors[key]) {
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            break;
        case 404:
            router.navigate('/not-found')
            break;;
        case 500:
            router.navigate('/server-error')
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
})

const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: object) => axios.post(url, body).then(responseBody),
    put: (url: string, body: object) => axios.put(url, body).then(responseBody),
    del: (url: string) => axios.delete(url).then(responseBody),
    postForm: (url: string, data: FormData) => axios.post(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url: string, data: FormData) => axios.put(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody)
}

const Guests = {
    create: (guest: Guest) => requests.post('guests', guest),
    list: () => requests.get('guests'),
    numberOfGuestsComing: () => requests.get('guests/total-number-of-guests-coming'),
}


const agent = {
    Guests,
}

export default agent;