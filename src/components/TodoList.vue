<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, idx) in todos"
        :key="todo.id"
        :todo="todo"
        :idx="idx"
        @remove-todo="removeTodo"
      />
    </ul>
  </div>
</template>

<script>
    import TodoItem from '@/components/TodoItem'

    export default {
        name: "TodoList",
        components: {
            TodoItem
        },
        props: {
            todos: {
                type: Array,
                required: true
            }
        },
        methods: {
            removeTodo(id) {
                this.$emit('remove-todo', id)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>