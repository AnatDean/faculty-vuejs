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
            isLoading: false,
            desiredUserDetails: ['name', 'email', 'phone', 'picture']
        };
    },
    async mounted() {
       const users = await this.getUsers(this.page, this.desiredUserDetails);
       this.users = users;
    },
    methods: {
        async getUsers(page,params) {
            const users = await fetchUsers(page,params)
            return users.map(this.extractUserInfo);
        },
        extractUserInfo({ email, name: { first, last }, phone, picture: { medium }, ...rest }) {
            return { email, firstName: first, lastName: last, phone, image: medium };
        },
        async getMoreUsers() {
            this.isLoading = true;
            this.page++
            const users = await this.getUsers(this.page, this.desiredUserDetails);
            this.users = this.users.concat(users)
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
        
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
        justify-content: center;
        list-style: none;
        padding: 0;
        gap: 1em;
        margin: 1em 0;

        .user {
            background-color: rgb(255,255,255);
            box-shadow: 1px 3px 3px 0 rgba(0,0,0,.1);
            height: fit-content;
            padding: 1em;
            display: flex;
            line-height: 175%;
        
        h3 {
        font-size: 2em;
        }

        p {
            color: black;
        }

        img {
            height: 150px;
        }
            
        a {

            color: rgb(162,44,51);;
            &:focus, &:hover {
               text-decoration: none;
               border: solid 1px #C060A1;
            }
        }

        .user--details { 
            padding-left: 1em;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            word-wrap: break-word;  
        }
    }
}

</style>