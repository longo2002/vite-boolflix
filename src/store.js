import { reactive } from 'vue'

const store = reactive({
    msg: "Ciao",
    apiUrlMovie: "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d",
    apiUrlTv: "https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d",
    imgPath: "https://image.tmdb.org/t/p/w342",
    srcVal: "",
})

export default store
