<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-footer v-bind:title="title"></app-footer>
    <app-content v-bind:characters="characters"></app-content>
  </div>
</template>

<script>
import Header from "./components/Header.vue"; //import what from where, this is registerig
import Footer from "./components/Footer.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-content": Content,
  },

  data() {
    return {
      characters: [
        { name: "Himu", speciality: "Khali paye hatahati kora", show: false },
        {
          name: "Rupa",
          speciality: "Himur jonne diner por por opekkha kora",
          show: false,
        },
        {
          name: "Badol",
          speciality: "Himu vai er sob kichu k mohimannito kora",
          show: false,
        },
        {
          name: "Majeda Khala",
          speciality: "Himu k bokajhoka kora",
          show: false,
        },
        { name: "OC Shaheb", speciality: "Hemu k arrest kora", show: false },
        { name: "Shuvro", speciality: "Jotilota toiri kora", show: false },
      ],
      title:"Himu"
    };
  },
  methods:{
     updateTitle:function(updatedTitle){
       this.title=updatedTitle;
     }
  }
};
</script>

<style>
</style>
