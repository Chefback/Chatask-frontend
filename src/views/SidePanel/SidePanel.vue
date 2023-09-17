<template>
    <n-divider />
    <div v-for="item  in tasklist">
        <!-- <n-button>所有</n-button> -->
        <side-btn :btname="item" />
    </div>
    <n-divider />
    <div class="collapsecontainer">
        <button @click=""></button>
        <n-collapse arrow-placement=" right">
            <n-collapse-item title="青铜" name="1">
                <side-btn btname="可以"></side-btn>
            </n-collapse-item>
        </n-collapse>
    </div>
    <n-divider />
    <n-collapse arrow-placement="right">
        <n-collapse-item title="青铜" name="1">
            <side-btn btname="可以"></side-btn>
        </n-collapse-item>
    </n-collapse>
    <n-divider />
    <side-btn btname="item" />
    <side-btn btname="item" />
    <side-btn btname="item" />
</template>

<script setup lang="ts">
import { NDivider, NButton, NCollapse, NCollapseItem } from "naive-ui";
import SideBtn from "./components/SideBtn.vue";
import { handleError, reactive } from "vue";
const tasklist = reactive([
    'diyi', 'dier', 'dais'
])
handler()=> console.log("clicked")
</script>

<style scoped></style>