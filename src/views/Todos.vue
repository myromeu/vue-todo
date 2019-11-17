<template>
  <div>
    <router-link to="/">
      Home
    </router-link>
    <AddTodo @add-todo="addTodo" />
    <select v-model="filter">
      <option value="all">
        All
      </option>
      <option value="completed">
        Completed
      </option>
      <option value="not-completed">
        Not Completed
      </option>
    </select>
    <hr>
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      :todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>
      No todos!
    </p>
  </div>
</template>

<script>
    import TodoList from '@/components/TodoList'
    import AddTodo from '@/components/AddTodo'
    import Loader from '@/components/Loader'

    export default {
        name: 'App',
        components: {
            AddTodo,
            Loader,
            TodoList
        },
        data() {
            return {
                api: 'https://jsonplaceholder.typicode.com',
                loading: true,
                filter: 'all',
                todos: []
            }
        },
        computed: {
          filteredTodos() {
            if (this.filter === 'completed') return this.todos.filter(todo => todo.completed);
            if (this.filter === 'not-completed') return this.todos.filter(todo => !todo.completed);
            return this.todos;
          }
        },
        mounted() {
            fetch(this.api + '/todos?_limit=10')
                .then(response => response.json())
                .then(json => {
                    setTimeout(() => {
                        this.todos = json;
                        this.loading = false
                    }, 500)
                })

        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            addTodo(newTodo) {
                newTodo.id = this.todos.length
                    ? this.todos[this.todos.length - 1].id + 1
                    : 1;
                this.todos.push(newTodo)
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
