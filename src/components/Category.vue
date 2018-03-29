<template>
    <div :class="status.name" class="col todo-block">
        <div class="todo-header" v-dropzone>
            <h5 class="todo-status">{{ status.name }}</h5>
            <span class="todo-number-items">0 item(s)</span>
        </div>
        <ul class="list-item">
            <todo-item v-for="item in items" :key="item.id" :item="item" v-draggable="item"></todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/Item'
export default {
  name: 'TodoCategory',
  props: ['status', 'items'],
  components: { TodoItem },
  methods: {
    onDrop: function (itemDrop) {
      if ((this.status.id + 1) !== itemDrop['idCategory']) {
        itemDrop['idCategory'] = this.status.id + 1
        this.$emit('dropOn', itemDrop)
      }
    }
  }
}

</script>

<style scoped>
    .todo-status {
        text-transform: uppercase;
        letter-spacing: -2px;
        font-weight: 600;
    }
    .todo-header {
        padding-left: 50px;
    }
</style>
