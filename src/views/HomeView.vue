<script setup>
import ControlBarVue from "../components/ControlBar.vue";
import NavBar from "../components/NavBar.vue";
import SubNav from "../components/SubNav.vue";
import List from "../components/List.vue";
</script>

<template>
  <div class="container">
    <NavBar></NavBar>
    <SubNav></SubNav>
    <ControlBarVue></ControlBarVue>
    <List></List>
  </div>
</template>

<style scoped>
.container {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
}
</style>
