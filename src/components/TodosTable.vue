<template>
    <div class="container grid-xs py-2">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Nome</th>
                    <th>Opções</th>
                </tr>
            </thead>
            <tbody v-for="(todo, index) in todosList" :key="index">
                <tr>
                    <th>
                      <TodoCheck :todosStatus="todo.completed" :id="todo.id"/>
                    </th>
                    <th>
                        {{todo.name}}
                    </th>
                    <th>
                        <button class="btn  btn-error input-group-btn btn-sm " @click="deleteTodo(todo.id)"> <i class="icon icon-delete "> </i></button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import TodoCheck from "./TodoCheck.vue";
import axios from 'axios'
export default {
  name: 'TodosTable',
  components:{
    TodoCheck,
  },
  props: {
    todosList: Array,
  },
  methods: {
    deleteTodo(id){
      axios
        .delete(`http://localhost:3000/todos/${id}`)
        .then(() => {
          this.$parent.upsdateProps()//T_T
        })
    },
  },
}
</script>

<style scoped>
  
  #botao{
    margin-right:0.5rem;
  }
  #check{
    background-color:white; 
    border: white 
  }
</style>