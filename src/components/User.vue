<script >
export default {
    name: 'User',
    props: {
        user: {type: Object}
    }
}
</script>

<template>
  <li class="user">
    <p>{{user.firstName}} {{ user.surname }}</p>
    <p>Email: <a href="mailto:sample@email.com">{{user.email}}</a></p>
    <p>Phone: <a href="tel:07777772111">{{user.phone}}</a></p>
    <img :src="user.image" alt="firstname surname picture"/>
  </li>
</template>

<style scoped>
    li {
        list-style: none;
        border: solid 1px coral;
        padding: 1em;
    }
    .user img {
        height: 150px;
    }


</style>
