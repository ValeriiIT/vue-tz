import {defineStore} from 'pinia'
import axios from "axios";

const url = "https://64fff48918c34dee0cd41124.mockapi.io/todos"
const arr : todosSchema[] = []

export const  useSearchStore = defineStore("searchStore", {
 state: () => ({
     todos: arr
 }),
    actions: {
     async getTodos () {
     const {data} = await axios(`${url}`)
         this.todos = data
},
    async addTodos (obj: todosSchema) {
         const {data} = await axios.post(url,obj)
        this.todos = data
    }

    }
})


export interface todosSchema {
    "id": number
        "title": string
        "text": string
        "dataSave": number
    "dataClose": number
    "complete": boolean
}
