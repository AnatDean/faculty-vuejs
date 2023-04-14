<script setup>
import UserList from '../components/UserList.vue';
</script>

<script>
  export default {
    data() {
        return {
            user: {
                firstName: "Sue",
                surname: "Stone",
                email: "sample@email.com",
                phone: "07777772111",
                image: "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
            }
        };
    },
    components: { UserList }
}
</script>

<template>
  <main>
   <UserList/>
  </main>
</template>
