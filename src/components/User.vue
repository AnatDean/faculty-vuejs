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
      <img :src="user.image" alt="firstname surname picture"/>
      <div class="user--details">
    <h3>{{user.firstName}} {{ user.lastName }}</h3>
    <address>
        <p>Email: <a href="mailto:sample@email.com">{{user.email}}</a></p>
        <p>Phone: <a href="tel:07777772111">{{user.phone}}</a></p>
    </address>
</div>
  </li>
</template>

<style lang='scss' scoped>
    .user {
        border: solid 1px coral;
        list-style: none;
        padding: 1em;
        display: flex;
        h3 {
            font-size: 1.5em;
        }
        .user--details { 
            padding: 0.5em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        img {
        height: 150px;
        }
    }

 


</style>
