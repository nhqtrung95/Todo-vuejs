<template>
    <li v-dropzone>{{ item.name }}</li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['item'],
}
</script>

<style scoped>
li {
	list-style: none;
	padding: 15px;
	background: #FFF;
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
	margin:  10px;
	border-radius: 3px;
	cursor: pointer;
    width: 90%;
    text-align: left;
}
</style>
