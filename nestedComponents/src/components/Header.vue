<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props:{
    title:{
      type:String
    }
  },
  data() {
    return {
      title: "Himu Ebong Tahara",
    };
  },
  methods:{
    changeTitle:function(){
     this.$emit('changeTitle', "An established humayun ahmed character");  
  }
  }
};
</script>

<style scoped>
header {
  background: #ffe553;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
