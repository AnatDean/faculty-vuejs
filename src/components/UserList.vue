<script>
import { fetchUsers } from '../requests/index'
import User from './User.vue';
 export default {
    name: 'UserList',
    data() {
        return {
            users: []
        };
    },
    async mounted() {
       const users = await this.getUsers();
       this.users = users;
    },
    methods: {
        async getUsers() {
            const users = await fetchUsers()
            return users.map(this.extractUserInfo);
        },
        extractUserInfo({ email, name: { first, last }, phone, picture: { medium } }) {
            return { email, firstName: first, lastName: last, phone, image: medium };
        },
    },
    components: { User }
}
</script>

<template>
     <ul>
            <User v-for="user in users" key={{user.phone}} :user=user />
    </ul>

</template>

<style>

</style>