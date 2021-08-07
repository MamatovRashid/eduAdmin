<template>
  <div class="container students">
    <div class="main-head">
      <h1>O’quvchilar</h1>
      <div class="searchbox">
        <input class="search" type="text" placeholder="search student" />
      </div>
    </div>
    <div class="main-box">
      <div class="mbox">
        <router-link class="boxcard" :key="index+1" v-for="(item, index) in list" :to="`/paymentspage/${index}`" tag="div">
          <student :item="item" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import student from '../../components/studentcard.vue';
export default {
    name: "Paymentss",
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

<style></style>
