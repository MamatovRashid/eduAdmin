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
                  <div class="col adds" v-show="toggle">
                    <button class="exit" @click="toggle = false">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4118 9L17.529 3.88278C18.157 3.25483 18.157 2.2367 17.529 1.60824L16.3918 0.470966C15.7638 -0.156989 14.7457 -0.156989 14.1172 0.470966L9 5.58818L3.88278 0.470966C3.25483 -0.156989 2.2367 -0.156989 1.60824 0.470966L0.470966 1.60824C-0.156989 2.23619 -0.156989 3.25432 0.470966 3.88278L5.58818 9L0.470966 14.1172C-0.156989 14.7452 -0.156989 15.7633 0.470966 16.3918L1.60824 17.529C2.23619 18.157 3.25483 18.157 3.88278 17.529L9 12.4118L14.1172 17.529C14.7452 18.157 15.7638 18.157 16.3918 17.529L17.529 16.3918C18.157 15.7638 18.157 14.7457 17.529 14.1172L12.4118 9Z" fill="#118AB2"/>
                        </svg>
                    </button>
                      <addfan/>
                  </div>
                  <div class="col" @click="toggle = true">
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
            index: "",
            toggle: false
        }
    },
    mounted(){
        this.index = this.$route.params.id
        this.toggle = false
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