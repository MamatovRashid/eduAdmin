<template>
  <div class="container students">
    <div class="main-head">
      <h1>Matematika</h1>
      <p>2-guruh</p>
      <div class="searchbox">
        <input class="search" type="text" placeholder="search student" />
      </div>
    </div>
    <div class="main-box">
      <div class="mbox">
        <router-link class="boxcard" :key="index+1" v-for="(item, index) in list" :to="`/grouppage/${index}`" tag="div">
          <student  :item="item" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import student from '../../components/studentcard.vue';
export default {
    name: "GroupStudents",
    components: {
        student,
    },
    computed: {
        list() {
            let arr = localStorage.list ? JSON.parse(localStorage.list) : [];
            return arr;
        }
    }
}
</script>

<style scoped>
.main-head p{
    font-size: 20px;
}
</style>
