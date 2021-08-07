<template>
  <div class="container paymentPage">
      <div class="main-head">
          <h1>{{ user.name }} <br> {{ user.surname }}</h1>
          <p class="date">Dars boshlangan sana: <span>12.12.2020</span></p>
      </div>
      <div class="main-box">
          <div class="box">
                <div class="col">
                    <paymentCard/>
                </div>
                <div class="col">
                    <paymentCard/>
                </div>
                <div class="col">
                    <paymentCard/>
                </div>
                <div class="col">
                    <paymentCard/>
                </div>
          </div>
      </div>
  </div>
</template>

<script>
import paymentCard from '../../components/paymentCard.vue'
export default {
    name: "PaymentsPage",
    components: {
        paymentCard
    },
    data() {
        return {
            index: ""
        }
    },
    mounted(){
        this.index = this.$route.params.id
    },
    computed: {
        user() {
            let a = {};
            let list = JSON.parse(localStorage.list);
            let index = parseInt(this.$route.params.id);
            for(let i=0; i < list.length; i++) {
                if(index === i) {
                    a = list[i]
                }
            }
            return a;
        }
    }
}
</script>

<style scoped>
.date{
    margin-top: 20px;
    font-size: 18px;
}
.date span{
    font-weight: 400;
    font-size: 18px;
}
.main-box{
    width: 100%;
    padding: 0 54px;
}
.box{
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 50px;
    justify-content: center;
}
@media screen and (max-width: 1199px) {
    .main-box{
        padding: 0 40px;
    }
}
@media screen and (max-width: 575px) {
    .main-box{
        padding: 0;
    }
}
@media screen and (max-width: 375px) {
  .box{
    grid-template-columns: repeat(auto-fill, 100%);
    grid-gap: 15px;
  }
}
</style>