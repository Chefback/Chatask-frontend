<template>
    <div class="card">
        <div class="checkbox" @click="checker">
            <IconSquare></IconSquare>
        </div>
        <div class="card-content" @click="clicker">
            <text>task item</text>
        </div>
        <div class="setting" @click="settingHandler" alt>
            <IconDots></IconDots>
        </div>
    </div>
</template>

<script setup lang="ts">
import { IconDots, IconSquare } from '@tabler/icons-vue';
import { computed, ref } from 'vue';
const isChecked = ref(false)
const isCanceled = ref(false)
const taskStatus = computed(() => isChecked.value || isCanceled.value)
const checker = () => console.log(taskStatus)
const clicker = () => console.log('item clicked')
const settingHandler = () => console.log('setting clicked')
</script>

<style scoped>
.card {
    /* width: 5em; */
    box-sizing: border-box;
    height: 2em;
    background-color: #ffffff;
    /* border: 1px solid #ccc; */
    border-bottom: .1em solid #ccc;
    /* border-bottom-width: 1em; */
    border-radius: .5px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;

    .checkbox {}

    .card-content {

        padding: 20px;
        width: 95%;
    }

    .setting {}
}


/* Styles for the hover effect */
.card:hover {
    transform: scale(1);
    /* Increase size on hover */
    /* box-shadow: 0 4px 8px #57A1AB; */
    background-color: #ecf1fe;
    /* Add shadow on hover */
    cursor: pointer;
    /* Change cursor on hover */
}
</style>