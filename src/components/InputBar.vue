<template>
    <div class="container grid-xs py-2">
      <img class="img-responsive" src = "@/assets/todo-logo.png">

        <div class="input-group">
            <input type="text" class="form-input" v-model="message" :placeholder="placeHolderContent" > 
            <form>
                <button class="btn  btn-success input-group-btn" @click="action(message)">
                    <i class="icon icon-arrow-right" ></i>{{buttonContent}}
                </button>
            </form>
        </div>

    </div>
</template>

<script>


import axios from "axios"
export default {
  name: 'InputBar',
  props: {
    buttonContent: String,
    placeHolderContent: String,
  },
  data() {
    return {
      message: null,
    }
  },
  methods: {
    action(input){
        axios
            .post('http://localhost:3000/todos', {
                name:input
            })
    },
  }
}
</script>

<style scoped>
img{
    max-width: 150px;
    margin: 0 auto;
  }

  
</style>