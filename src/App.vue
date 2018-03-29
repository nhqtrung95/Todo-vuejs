<template>
  <div id="app">
    <todo-navigation @submitForm="addNewItem"></todo-navigation>
    <div class="container-fluid">
      <div class="row">
        <todo-category v-for="(status, index) in status" :key="status" :status="{id: index, name: status}" :items="getItemsViaStatus(index)" @dropOn="updateItem"></todo-category>
      </div>
    </div>
    <todo-trash @dropOn="deleteItem"></todo-trash>
  </div>
</template>

<script>
import TodoNavigation from '@/components/Navigation';
import TodoCategory from '@/components/Category';
import TodoTrash from '@/components/Trash';
const status = ['Todo', 'OnGoing', 'Done'];

export default {
  name: 'App',
  components: { TodoNavigation, TodoCategory, TodoTrash },
  data: function () {
    return {
      status,
      items: []
    }
  },
  created: function() {
    this.$http.get(this.$serverURL)
      .then(res => this.items = res.data);
  },
  updated: function() {
    this.$http.get(this.$serverURL)
      .then(res => this.items = res.data);
  },
  methods: {
    getItemsViaStatus: function(stt) {
      return this.items.filter(function(item) {
        return item['idCategory'] - 1 === stt;
      })
    },
    addNewItem: function(item) {
      item['idCategory'] = 1;
      this.$http.post(this.$serverURL, item)
        .then(res => console.log(res))
    },
    updateItem: function(item) {
      this.$http.put(this.$serverURL + '/' + item.id, item)
        .then(res => console.log(res));
    },
    deleteItem: function(item){
      this.$http.delete(this.$serverURL + '/' + item.id)
      .then(res => console.log(res));
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: var(--font-family-sans-serif);
}
body {
  background: #f6f6f6;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.Todo li, .Todo input{
	border-left: 5px solid #e74c3c;
}
.OnGoing li, .OnGoing input{
	border-left: 5px solid #f39c12;
}
.Done li, .Done input{
	border-left: 5px solid #2ecc71;
}
</style>
