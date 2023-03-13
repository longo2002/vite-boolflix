<template>
    <div class="mediacard_container">
        <div v-for="media in mediaArray" class="mediacard">
            <img v-if="media.poster_path" :src="this.imgPath + media.poster_path" alt="poster">
            <img v-else src="/placeholder.png" width="342" alt="placeholder">
            <ul class="info">
                <li>
                    <h2>{{ media.original_title }}</h2>
                </li>
                <li>
                    <h4>{{ media.title }}</h4>
                </li>
                <li>
                    <img v-if="flags[media.original_language]" :src="flags[media.original_language]" width="30" alt="flag">
                    <h4 v-else>{{ media.original_language }}</h4>
                </li>
                <li>
                    <font-awesome-icon v-for="n in this.starVote(media.vote_average)" icon="fa-solid fa-star" />
                    <font-awesome-icon v-for="n in (5 - this.starVote(media.vote_average))" icon="fa-regular fa-star" />
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
            mediaArray: [],
            movies: [],
            tv: [],
            flags: {
                it: "/it.png",
                en: "/en.png",
                sp: "/sp.png",
                fr: "/fr.png",
            },
        }
    },
    methods: {
        mediaInfoRequest() {
            this.fetchMovie()
            // this.fetchTvSeries()
        },
        fetchMovie() {
            axios
                .get(this.apiUrlMovie, {
                    params: {
                        query: this.srcVal,
                    }
                }
                )
                .then((res) => {
                    this.mediaArray = res.data.results
                });
        },
        // fetchTvSeries() {
        //     axios
        //         .get(this.apiUrlTv, {
        //             params: {
        //                 query: this.srcVal,
        //             }
        //         })
        //         .then((res) => {
        //             this.mediaArray = res.data.results
        //         });
        // },
        starVote(n) {
            return Math.round(n / 2)
        },
    },
    watch: {
        srcVal(newVal, oldVal) {
            console.log(newVal, oldVal)
            this.mediaInfoRequest()
        }
    },
    computed: {
        apiUrlMovie() {
            return this.store.apiUrlMovie
        },
        apiUrlTv() {
            return this.store.apiUrlTv
        },
        srcVal() {
            return this.store.srcVal
        },
        imgPath() {
            return this.store.imgPath
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
    width: 373px;
    padding: 15px;
}
</style>