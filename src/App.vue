<template>
  <InputBar :buttonContent="'Adcionar'" :placeHolderContent="'Adcionar uma tarefa'"/>
  <TodosTableVue :todosList="todos"/>



</template>

<script>

  import axios from "axios"
  import "spectre.css/dist/spectre.min.css"
  import "spectre.css/dist/spectre-exp.min.css"
  import "spectre.css/dist/spectre-icons.min.css"

  import InputBar from "./components/InputBar.vue"
  import TodosTableVue from "./components/TodosTable.vue"

  
  export default {
    
    name: 'App',
    components:{
      InputBar,
      TodosTableVue
    },
    data(){
      return {todos:[]}
    },
    created(){
      axios
        .get('http://localhost:3000/todos')
        .then((response)=>{
          this.todos = response.data;
        })  
    },
    methods: {
      upsdateProps(){
        axios
        .get('http://localhost:3000/todos')
        .then((response)=>{
          this.todos = response.data;
        })  
      }
    },
    
}

</script>

<style >

</style>
