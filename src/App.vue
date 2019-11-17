<template>
  <div id="app">
    <h1>Toodoo App</h1>
    <hr>

    <router-view />
  </div>
</template>

<script>
    export default {
        name: 'App',
        components: {
        },
        data() {
          return {
            api: 'https://jsonplaceholder.typicode.com',
            todos: []
          }
        },
        mounted() {
            fetch(this.api + '/todos?_limit=3')
                .then(response => response.json())
                .then(json => { this.todos = json })
        },
        methods: {
            removeTodo(id) {
                this.todos = this.todos.filter(todo => todo.id !== id)
            },
            addTodo(newTodo) {
                newTodo.id = this.todos[this.todos.length - 1].id + 1
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
