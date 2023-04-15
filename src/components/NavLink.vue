<script>
import { RouterLink, RouterView } from 'vue-router'
export default {
    name: 'NavLink',
    props: {
        path: { type: String },
        label: { type: String }
    }
}
</script>





<template><RouterLink class='navLink' :to="`${path}`">{{ label }}</RouterLink></template>

<style lang="scss">
    .navLink  {
        background-color: rgb(162,44,51);
        color: rgb(255,255,255);
        border: none;
        height: 2em;
        width: 15%;
        font-size: 1.2em;
        text-align: center;
        margin: 0 auto;
        font-weight: 600;
        &:hover, &:focus {
            color: rgb(162,44,51);
            background-color: rgb(255,255,255);
            border: rgb(162,44,51) solid 1px;
            
        }
        
    }
</style>