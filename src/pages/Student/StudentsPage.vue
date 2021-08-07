<template>
  <div class="studentspage addStudent">
      <div class="box">
          <div class="left">
              <div class="info">
                  <h1>Ism</h1>
                  <p>{{ user.name }}</p>
              </div>
              <div class="info">
                  <h1>Familya:</h1>
                  <p>{{ user.surname }}</p>
              </div>
              <div class="info">
                  <h1>Telefon raqami:</h1>
                  <p>{{ user.phone }}</p>
              </div>
              <div class="info">
                  <h1>Manzili:</h1>
                  <p>{{ user.address }}</p>
              </div>
              <div class="info">
                  <h1>Topshiradigan oliy o’quv yurti:</h1>
                  <p>{{ user.education }}</p>
              </div>
              <div class="info">
                  <h1>Ota-onasi ism-familiyasi:</h1>
                  <p>{{ user.parents_fullname }}</p>
              </div>
              <div class="info">
                  <h1>Ota-ona telefon raqami:</h1>
                  <p>{{ user.parents_phone }}</p>
              </div>
              <div class="save">
                  <router-link tag="button" :to="`/studentadd?index=${index}`">O’zgartirish</router-link>
                  <router-link tag="button" to="/">Chiqish</router-link>
              </div>
          </div>
          <div class="right">
              <h1>fanlar</h1>
              <div style="width: 250px;">
                  <div class="col">
                    <fancard/>
                  </div>
                  <div class="col adds">
                      <addfan/>
                  </div>
                  <div class="col">
                    <addcard />
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import addcard from '../../components/addCard.vue';
import fancard from '../../components/fancard.vue';
import addfan from '../../components/addfan.vue';
export default {
    name: 'StudentsPage',
    components: {
        addcard,
        fancard,
        addfan
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
.info{
    margin-bottom: 3px;
}
.info h1{
    color: #898989;
    font-size: 12px;
    font-weight: 400;
}
.info p{
    font-size: 20px;
}
</style>