<template>
  <div id="app">
    <Header />
    <div style="padding-top: 72px">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
  font-size: 16px;
  line-height: 1.5;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  display: flex;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
}
.translate{
  transform: translateX(100%);
}
</style>
