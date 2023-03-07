<script>
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
    <h1>{{ this.store.msg }}</h1>
</template>

<style scoped></style>