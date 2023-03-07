<script >
import store from '../store'
export default {
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container">
        <img src="../assets/logo.png" alt="">
        <div class="search-tools">
            <input type="text" placeholder="Inserisci il titolo che desider!">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
</template>

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