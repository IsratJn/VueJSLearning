<template>
  <footer>
    <p>{{ copyright }} {{title}}</p>
  </footer>
</template>

<script>
import {bus} from '../main';

export default {
   props:{
    title:{
      type:String
    }
  },
  data() {
    return {
      copyright: "Character Analysis of others and ",
    };
  },
  created(){
    bus.$on('titleChanged',(data)=>{
      this.title=data;
    });
  }
};
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: rgb(219, 219, 219);
  text-align: center;
}
</style>