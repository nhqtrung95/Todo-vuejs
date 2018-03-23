<template>
    <div :class="status" class="col todo-block">
        <div class="todo-header">
            <h5 class="todo-status">{{ status }}</h5>
            <span class="todo-number-items">0 item(s)</span>
        </div>
        <ul class="list-item">
            <todo-item v-for="item in items" :key="item.id" :item="item"></todo-item>
        </ul>
    </div>
</template>

<script>
import TodoItem from '@/components/Item'

export default {
  name: 'TodoCategory',
  props: ['status', 'items'],
  components: { TodoItem }
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
