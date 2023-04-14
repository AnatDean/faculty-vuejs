<script setup>
import User from '../components/User.vue'
</script>

<script>
  export default {
    data() {
        return {
            user: {
              firstName: 'Sue',
              surname: 'Stone',
              email: 'sample@email.com',
              phone: '07777772111',
              image: 'https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
        }
    }
  }
}
</script>

<template>
  <main>
   <User :user=user />
  </main>
</template>
