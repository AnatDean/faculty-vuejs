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
        background-color: #C060A1;;
        color: rgb(255,255,255);
        border: none;
        height: 2em;
        width: 15%;
        font-size: 1.2em;
        margin: 0 auto;
        &:hover, &:focus {
            color: #C060A1;;
            background-color: rgb(255,255,255);
            border: #C060A1 solid 1px;
        }
        
    }
</style>