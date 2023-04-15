<script >
export default {
    name: 'UserCard',
    props: {
        user: {type: Object}
    }
}
</script>

<template>
  <li class="user">
      <img :src="user.image" :alt="`${user.firstName} ${user.lastName} picture`"/>
      <div class="user--details">
    <h3 class="user--name">{{user.firstName}} {{ user.lastName }}</h3>
    <address>
        <p>Email: <a :href="`mailto:${user.email}`">{{user.email}}</a></p>
        <p>Phone: <a :href="`tel:${user.phone}`">{{user.phone}}</a></p>
    </address>
</div>
  </li>
</template>