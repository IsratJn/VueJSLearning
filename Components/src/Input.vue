<template>
    <div>

        <p>{{msg}}</p>
        <input type ="text" v-model="message">
        <p>{{message}}</p>
    </div>
</template>

<script>
export default{
    props:['msg'],
    data(){
        return{
            message:""
        }
    }
}
</script>