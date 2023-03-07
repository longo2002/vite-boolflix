import { reactive } from 'vue'

const store = reactive({
    msg: "Ciao",
    apiKey: "https://api.themoviedb.org/3/movie/550?api_key=42aeeac00f64d15dbccdbe068f30aed5",
})

export default store
