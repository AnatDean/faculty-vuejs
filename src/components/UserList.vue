<script>
import { fetchUsers } from '../requests/index'
import User from './User.vue';
import Button from './Button.vue';
 export default {
    name: 'UserList',
    data() {
        return {
            users: [],
            page: 1,
            isLoading: false
        };
    },
    async mounted() {
       const users = await this.getUsers(this.page);
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
        async getMoreUsers() {
            this.isLoading = true;
            this.page++
            const users = await fetchUsers(this.page);
            const formattedUsers = users.map(this.extractUserInfo);
            this.users = this.users.concat(formattedUsers)
        }
    },
    components: { User, Button }
}
</script>

<template>
    <div id="main">
        <ul id="userlist">
                <User v-for="user in users" key={{user.phone}} :user=user />
        </ul>
        <Button :onClick="getMoreUsers" label="See more" />
    </div>
</template>

<style lang="scss">
    #main {
        display: flex;
        flex-flow: row wrap;
    }
    #userlist {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        gap: 1em;
        .user {
            width: 30em;
            height: fit-content;
            a {
                color: #C060A1;
                &:focus, &:hover {
                   color: #F0CAA3
                }
            }
           
        }
    }

</style>