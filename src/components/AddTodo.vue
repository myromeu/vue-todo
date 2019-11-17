<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title">
    <button type="submit">
      Добавить
    </button>
  </form>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            onSubmit() {
                if (this.title.trim()) {
                    const newTodo = {
                        title: this.title,
                        completed: false
                    }

                    this.$emit('add-todo', newTodo);

                    this.title = ''
                }
            }
        }
    }
</script>

<style scoped>
form {
    display: flex;
    justify-content: space-between;
    max-width: 500px;
    margin-bottom: 1.25em;
    margin-top: 1.25em;

}
form *:first-child {
    margin-right: 1.25em;
}
input {
    width: 400px;
}
</style>