<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TodoList from './views/TodoList/TodoList.vue';
import TodoContent from './views/TodoContent/TodoContent.vue';
import SidePanel from './views/SidePanel/SidePanel.vue';
</script>

<template>
  <div class="root">
    <div class="sidepanel">
      <SidePanel></SidePanel>
    </div>
    <div class="content">
      <TodoList></TodoList>
      <TodoContent></TodoContent>
      <!-- <RouterView /> -->
    </div>
  </div>
</template>

<style scoped>
.root {
  display: flex;

  .sidepanel {
    flex: 1;
    width: 15vw;
    height: 100vh;
    box-sizing: border-box;
    border: 1vw solid red;
    margin: 0;
  }

  .content {
    display: flex;
    justify-content: space-evenly;
    /* align-items: flex-end; */
    width: 85vw;
    box-sizing: border-box;
    border: 1vw solid red;
    margin: 0;
  }
}
</style>
