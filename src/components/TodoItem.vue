<template>
  <li>
    <span
      :class="{done: todo.completed}"
      @change="todo.completed = !todo.completed"
    >
      <input type="checkbox">
      <strong>{{ idx + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button
      class="rm"
      @click="$emit('remove-todo', todo.id)"
    >
      &times;
    </button>
  </li>
</template>

<script>
    export default {
        props: {
            todo: {
                type: Object,
                required: true
            },
            idx: {
                type: Number
            }
        },
        methods: {
            removeHandler(id) {
                this.$emit('remove-todo', id);
            }
        }
    }
</script>

<style scoped>
li {
    border: 1px solid #2c3e50;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
}
.rm {
    background: palevioletred;
    color: #fff;
    border-radius: 40%;
    font-weight: bold;
    border-style: none;
}
input {
    margin-right: 1rem;
}
.done {
    text-decoration: line-through;
}
</style>