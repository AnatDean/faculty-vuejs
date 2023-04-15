<script>
export default {
    name: 'Button',
    props: {
        onClick: {type: Function},
        label: {type:String}
    }
}
</script>

<template><button @click=onClick>{{ label }}</button></template>

<style lang="scss">
    button  {
        background-color: rgb(162,44,51);
        color: rgb(255,255,255);
        border: none;
        height: 2em;
        width: 15%;
        font-size: 1.2em;
        margin: 0 auto;
        &:hover, &:focus {
            color: rgb(162,44,51);
            background-color: rgb(255,255,255);
            border: rgb(162,44,51) solid 1px;
        }
        
    }
</style>