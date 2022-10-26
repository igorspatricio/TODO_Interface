<template>
    <span :class="labelType" @click="changeStatus()"><i :class="iconType"></i></span>
</template>


<script>

import axios from "axios"
import changeStatus from "../js/TodoCheck.js"

export default {
    name:'TodoCheck',
    props:{
        todosStatus: Boolean,
        id: Number,
    },
    data(){
        return {
            labelType: '',
            iconType: '',
            statusChange: null,
        }
    },
    created() {
        this.statusChange = this.todosStatus
        
        const {labelType, iconType} = changeStatus(this.todosStatus)        
        this.labelType = labelType
        this.iconType = iconType
       
    },
    methods: {
        changeStatus(){
            axios.put(`http://localhost:3000/todos/${this.id}`, {
                completed: !this.statusChange
            }).then((response)=>{
                if (response.status == 200) {

                    this.statusChange = !this.statusChange;
                    const {labelType, iconType} = changeStatus(this.statusChange)
                   
                    this.labelType = labelType
                    this.iconType = iconType
                    
                }
            })
        }

    },
}
</script>


<style scoped>
.teste{
    background-color:antiquewhite;
    
}
span{
    border: solid black 1px;
}
</style>