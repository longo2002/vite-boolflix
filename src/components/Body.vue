<script >
import store from '../store'
import MediaCard from '../components/MediaCard.vue';

export default {
    data() {
        return {
            store,
        };
    },
    components: { MediaCard }
}
</script>

<template>
    <MediaCard></MediaCard>
</template>

<style scoped></style>