<template>
  <div class="container group">
      <div class="main-head">
          <h1>O’qituvchilar</h1>
          <div class="searchbox">
            <input class="search" type="text" placeholder="search student">
            <router-link to="/teacheradd" class="add">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="white" stroke="#118AB2"/>
                    <path d="M39.25 22.75H36.25V19.75C36.25 19.3375 35.9125 19 35.5 19H34C33.5875 19 33.25 19.3375 33.25 19.75V22.75H30.25C29.8375 22.75 29.5 23.0875 29.5 23.5V25C29.5 25.4125 29.8375 25.75 30.25 25.75H33.25V28.75C33.25 29.1625 33.5875 29.5 34 29.5H35.5C35.9125 29.5 36.25 29.1625 36.25 28.75V25.75H39.25C39.6625 25.75 40 25.4125 40 25V23.5C40 23.0875 39.6625 22.75 39.25 22.75ZM20.5 25C23.8141 25 26.5 22.3141 26.5 19C26.5 15.6859 23.8141 13 20.5 13C17.1859 13 14.5 15.6859 14.5 19C14.5 22.3141 17.1859 25 20.5 25ZM24.7 26.5H23.9172C22.8766 26.9781 21.7188 27.25 20.5 27.25C19.2812 27.25 18.1281 26.9781 17.0828 26.5H16.3C12.8219 26.5 10 29.3219 10 32.8V34.75C10 35.9922 11.0078 37 12.25 37H28.75C29.9922 37 31 35.9922 31 34.75V32.8C31 29.3219 28.1781 26.5 24.7 26.5Z" fill="#118AB2"/>
                </svg>
            </router-link>
          </div>
      </div>
      <div class="main-box">
          <div class="mbox">
            <router-link class="boxcard" :key="index+1" v-for="(item, index) in teacher" :to="`/teacherpage/${index}`" tag="div">
                <teachers :item="item" />
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import teachers from '../../components/teachercard.vue';
export default {
    name: "Teachers",
    components: {
        teachers,
    },
    computed: {
        teacher() {
            let arr = localStorage.teacher ? JSON.parse(localStorage.teacher) : [];
            return arr;
        }
    }
}
</script>

<style>

</style>