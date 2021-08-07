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
              <div class="save">
                  <router-link tag="button" :to="`/teacheradd?index=${index}`">O’zgartirish</router-link>
                  <router-link tag="button" to="/teachers">Chiqish</router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TeacherPage',
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
            let teacher = JSON.parse(localStorage.teacher);
            let index = parseInt(this.$route.params.id);
            for(let i=0; i < teacher.length; i++) {
                if(index === i) {
                    a = teacher[i]
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
.addStudent .box{
    justify-content: start !important;
}
</style>