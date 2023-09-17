<template>
    <div class="container">

        <list-header></list-header>
        <div v-for="(item) in Array(10)" class="list-style">
            <list-item></list-item>
        </div>
    </div>
</template>

<script setup lang="ts">
import ListItem from "./components/ListItem.vue";
import ListHeader from "./components/ListHeader.vue";


</script>

<style scoped>
.list-style {
    display: flex;
    flex-direction: column;
}
</style>