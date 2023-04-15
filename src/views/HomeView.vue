<script setup>
import UserList from '../components/UserList.vue';
</script>

<script>
  export default {
    components: { UserList }
}
</script>

<template>
  <main>
   <UserList :key="$route.params.page" :page=this.$route.params.page />
  </main>
</template>

<style>
  main {
    margin:  auto
  }
</style>
