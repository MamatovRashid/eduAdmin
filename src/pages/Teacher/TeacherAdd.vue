<template>
  <div class="addStudent">
      <div class="box">
          <div class="left">
              <div class="inputs">
                  <label for="">Ism:</label>
                  <input v-model="form.name" type="text">
              </div>
              <div class="inputs">
                  <label for="">Familya:</label>
                  <input v-model="form.surname" type="text">
              </div>
              <div class="inputs">
                  <label for="">Telefon raqami:</label>
                  <input v-model="form.phone" type="text">
              </div>
              <div class="inputs">
                  <label for="">Manzili:</label>
                  <input v-model="form.address" type="text">
              </div>
              <div class="inputs">
                  <label for="">Topshiradigan oliy o’quv yurti:</label>
                  <input v-model="form.education" type="text">
              </div>
              <div class="save">
                  <button @click="saveTeacher()">{{ saqlash }}</button>
                  <button @click="$router.go(-1)">Orqaga qaytish</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'AddStudent',
    data() {
        return {
            form: {
                name: "",
                surname: "",
                phone: "",
                address: "",
                education: "",
            },
            saqlash: "Saqlash"
        }
    },
    mounted(){
        this.edit()
    },
    methods: {
        saveTeacher () {
            if(!this.$route.query.index){
                let arr = localStorage.teacher ? JSON.parse(localStorage.teacher) : [];
                arr.push(this.form);
                localStorage.teacher = JSON.stringify(arr);
                
                alert('Saqlandi');
                this.$router.push('/teachers')
            }
            else{
                let teacher = JSON.parse(localStorage.teacher);
                let index = parseInt(this.$route.query.index);
                for(let i=0; i < teacher.length; i++) {
                    if(index === i) {
                        teacher[i] = this.form
                    }
                }
                localStorage.teacher = JSON.stringify(teacher);

                alert("O'zgardi");
                this.$router.push('/teacherpage/' + index)
            }
        },
        edit () {
            if(this.$route.query.index){
                this.saqlash = "O'zgartirish";
                let teacher = JSON.parse(localStorage.teacher);
                let index = parseInt(this.$route.query.index);
                for(let i=0; i < teacher.length; i++) {
                    if(index === i) {
                        this.form = teacher[i]
                    }
                }
            }
            
        }
    }
}
</script>

<style scoped>
.addStudent .box{
    justify-content: start !important;
}
</style>