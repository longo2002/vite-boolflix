<template>
    <div class="mediacard_container">
        <div v-for="media in mediaArray" class="mediacard">
            <ul>
                <li>
                    <h2>{{ media.title }}</h2>
                </li>
                <li>
                    <h4>{{ media.original_title }}</h4>
                </li>
                <li>
                    <h4>{{ media.original_language }}</h4>
                </li>
                <li>
                    <h4>{{ parseFloat(media.vote_average).toFixed(2) }}</h4>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import store from '../store'
import axios from 'axios'

export default {
    data() {
        return {
            store,
            srcVal: "",
            mediaArray: [],
        }
    },
    watch: {
        mediaInfoRequest(srcVal) {
            axios
                .get(this.apiUrl, {
                    params: {
                        q: srcVal,
                    }
                }
                )
                .then((res) => {
                    console.log(res.data.results)
                    this.mediaArray = res.data.results
                })
        },
    },
    computed: {
        apiUrl() {
            return this.store.apiUrl
        }
    },

}

</script>

<style scoped>
.mediacard_container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 1280px;
    margin: 0 auto;
    padding: 10px;
    gap: 20px;
}

.mediacard {
    height: 200px;
    width: 400px;
    border: 2px solid white;
    padding: 15px;
}
</style>