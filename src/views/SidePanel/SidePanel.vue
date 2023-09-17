<template>
    <div class="container">
        <div>
            <n-divider />
            <div v-for="item  in tasklist">
                <!-- <n-button>所有</n-button> -->
                <side-btn :btname="item" />
            </div>
        </div>
        <div>

            <div class="collapsecontainer">
                <n-button text style="font-size: 24px" @click="clickhandler" class="collabtn">
                    <n-icon>
                        <Plus />
                    </n-icon>
                </n-button>
                <!-- <button @click="clickhandler"></button> -->
                <n-collapse arrow-placement=" right">
                    <n-collapse-item title="青铜" name="1">
                        <side-btn btname="可以"></side-btn>
                    </n-collapse-item>
                </n-collapse>
            </div>
            <n-divider />
        </div>
        <div>
            <n-collapse arrow-placement="right">
                <n-collapse-item title="青铜" name="1">
                    <side-btn btname="可以"></side-btn>
                </n-collapse-item>
            </n-collapse>
            <n-divider />
        </div>
        <div>

            <side-btn btname="item" />
            <side-btn btname="item" />
            <side-btn btname="item" />
        </div>

    </div>
</template>

<script setup lang="ts">
import { NDivider, NButton, NCollapse, NCollapseItem, NIcon } from "naive-ui";
import { PlusSquareOutlined as Plus } from '@vicons/antd'
import SideBtn from "./components/SideBtn.vue";
import { handleError, reactive } from "vue";
const tasklist = reactive([
    'diyi', 'dier', 'dais'
])
const clickhandler = () => console.log("clicked")
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;

}

.collapsecontainer {
    position: relative;

    .collbtn {
        position: absolute;
        top: 10px;
        /* Adjust the top position as needed */
        left: 10px;
        /* Adjust the left position as needed */
        z-index: 2
    }
}
</style>