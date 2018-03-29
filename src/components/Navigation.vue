<template>
  <input v-on:keyup.enter="submit()" type="text" placeholder="What's needs to be done" v-model="todoContent">
</template>

<script>
export default {
    name: 'TodoNavigation',
    data: function () {
        return {
            todoContent: ""
        }
    },
    methods: {
        submit: function () {
            this.$emit('submitForm', {name: this.todoContent});
            this.todoContent = "";
        }
    }
}
</script>

<style scoped>
    input {
        width: 100%;
        height: 50px;
        padding: 10px;
        font-size: 16px;
        border: none;
        box-shadow: inset 0 0 1px black;
    }
</style>
