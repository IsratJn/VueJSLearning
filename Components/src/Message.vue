<template>
    <div>
        <h1>{{message}}</h1>
        <app-input :msg="message"></app-input>
    </div>
</template>

<script>
import Input from './Input.vue';
export default {
    data(){
        return{
            message: 'This is my second message!'
        }
    },
    components :{
        'app-input':Input
    }

}
</script>