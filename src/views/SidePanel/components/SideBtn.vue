<template>
    <div>
        <n-button :style="{ width: '100%' }">{{ btname }}</n-button>
    </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
defineProps<{ btname: string }>()
</script>

<style scoped>
div {

    /* .btnstyle {

        width: 15vw;
    } */
}
</style>