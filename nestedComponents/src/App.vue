<template>
  <div>
    <app-header></app-header>
    <app-footer></app-footer>
    <app-content></app-content>
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
    return {};
  },
};
</script>

<style>
</style>
