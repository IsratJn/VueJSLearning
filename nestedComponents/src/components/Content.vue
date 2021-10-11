<template>
  <div id="characters">
    <ul>
      <li
        v-for="character in characters"
        v-on:click="character.show = !character.show"
      >
        <h2>{{ character.name }}</h2>
        <h3 v-show="character.show">{{ character.speciality }}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    characters: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#characters {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>