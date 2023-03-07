import { reactive } from 'vue'

const store = reactive({
    msg: "Ciao",
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=",
})

export default store
