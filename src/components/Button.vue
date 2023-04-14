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

<style>
    button  {
        background-color: aquamarine;
        color: black;
        height: 4em;
    }
</style>