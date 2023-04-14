<script >
export default {
    name: 'User',
    props: {
        user: {type: Object}
    },
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
