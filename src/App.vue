<template>
  <div id="app">
    <todo-navigation v-on:submitForm="addNewItem"></todo-navigation>
    <div class="container-fluid">
      <div class="row">
        <todo-category v-for="status in status" :key="status" :status="status" :items="getItemsViaStatus(status)"></todo-category>
      </div>
    </div>
    
  </div>
</template>

<script>
import TodoNavigation from '@/components/Navigation';
import TodoCategory from '@/components/Category';
import axios from 'axios'

const status = ['Todo', 'OnGoing', 'Done'];
const items = [
  {
    id: 1,
    content: 'Todo App',
    status: 'Todo'
  },
  {
    id: 2,
    content: 'Home Automation',
    status: 'OnGoing'
  }
]

export default {
  name: 'App',
  components: { TodoNavigation, TodoCategory },
  data: function () {
    return {
      status,
      items
    }
  },
  created: function() {
    axios.get('https://guarded-spire-32978.herokuapp.com/public/items')
    .then(res => console.log(res));
  },
  methods: {
    getItemsViaStatus: function (status) {
      return this.items.filter(function(item) {
        return item['status'] === status;
      })
    },
    addNewItem: function (item) {
      console.log(item);
      if (item.content) {
        item['status'] = 'Todo';
        item['id'] = this.maxId + 1;
      }
      this.items.push(item);
    }
  },
  computed: {
    maxId: function () {
      let max = 0;
      this.items.forEach(function (item) {
        if (item.id > max) {
          max = item.id;
        }
      })
      return max;
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
