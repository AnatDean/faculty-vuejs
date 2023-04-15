<script>
import { fetchUsers } from '../requests/index'
import User from './UserCard.vue';
import NavLink from './NavLink.vue';

 export default {
    name: 'UserList',
    props: {
        page: {
            type: String,
            default: '1'
        }
    },
    data() {
        return {
            users: [],
            isLoading: true,
            nPerRequest: 12,
            desiredUserDetails: ['name', 'email', 'phone', 'picture']
        };
    },
    async mounted() {
        await this.getUsers(this.page, this.nPerRequest, this.desiredUserDetails);
    },
    watch:{
        '$route.params.page' (to, from){
            if (to !== from) {
                this.getUsers(to, this.nPerRequest, this.desiredUserDetails)
            }
        }   
    }, 

    methods: {
        async getUsers(page,n,params) {
            this.isLoading = true
            const users = await fetchUsers(page, n, params)
            this.users = users.map(this.extractUserInfo);
            this.isLoading = false
        },
        extractUserInfo({ email, name: { first, last }, phone, picture: { medium } }) {
            return { email, firstName: first, lastName: last, phone, image: medium };
        }, 
    },

    computed: {
        currentRangeInView() {
            if (this.page === '1') return {from : 1, to: this.nPerRequest};

            const numberPage = parseInt(this.page)
            const previousPage = numberPage -1

            return {from: previousPage * this.nPerRequest + 1, to: numberPage * this.nPerRequest }
        }
    },
    components: { User, NavLink }
}
</script>

<template>
    <div id="main">
        <h2>Viewing staff: {{ currentRangeInView.from }} to {{ currentRangeInView.to }}</h2>
        <div v-if="isLoading" class="loader"></div>
        <ul id="userlist">
                <User v-for="user in users" :key=user.phone :user=user />
        </ul>
        <nav id="nav">
            <NavLink v-if="page > 1" :path="`/${parseInt(page) - 1}`" :label="`Go back`"/>
            <NavLink :path="`/${parseInt(page) + 1}`" :label="`See more`"/>
        </nav>
    </div>
</template>

<style lang="scss">
    nav {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .loader {
        border: 16px solid #f3f3f3; 
        border-top: 16px solid rgb(162,44,51); 
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
        margin: 0 auto;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    #userlist {
        
        width: 100%;
        display: grid;
        @media only screen and (min-width: 600px) {
            grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
        }
        justify-content: center;
        list-style: none;
        padding: 0;
        gap: 1em;
        margin: 1em 0;

        .user {
            background-color: rgb(255,255,255);
            box-shadow: 1px 3px 3px 0 rgba(0,0,0,.1);
            padding: 1em;
            display: flex;
            line-height: 175%;
            white-space: pre-wrap;
        
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
                font-size: clamp(0.55rem, 0.8rem, 1.5rem);
                color: rgb(162,44,51);

                @media only screen and (min-width: 600px) {
                    font-size: 1em;
                }
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