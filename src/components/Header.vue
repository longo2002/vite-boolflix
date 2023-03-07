<template>
    <div class="container">
        <img src="../assets/logo.png" alt="">
        <div class="search-tools">
            <input type="text" placeholder="Inserisci il titolo che desider!" v-model="srcVal">
            <button @click=searchFunction()><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</template>

<script >
import store from '../store'
export default {
    data() {
        return {
            store,
            srcVal: "",
        }
    },
    methods: {
        searchFunction() {
            this.$emit("srcVal", this.srcVal)
            console.log("click!", this.srcVal)
        }
    },
    computed: {
        apiUrl() {
            return this.store.apiUrl
        }
    }

}
</script>

<style scoped>
.container {
    width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 75px;
}

.search-tools {
    display: flex;
    align-items: center;
    gap: 15px;
}

input {
    padding: 0.5em 1em;
    font-size: 1em;
    border: 0px;
}
</style>