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
              <div class="inputs">
                  <label for="">Ota-onasi ism-familiyasi:</label>
                  <input v-model="form.parents_fullname" type="text">
              </div>
              <div class="inputs">
                  <label for="">Ota-ona telefon raqami:</label>
                  <input v-model="form.parents_phone" type="text">
              </div>
              <div class="save">
                  <button @click="save()">{{ saqlash }}</button>
                  <button>Orqaga qaytish</button>
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
    name: 'AddStudent',
    components: {
        addcard,
        fancard,
        addfan
    },
    data() {
        return {
            form: {
                name: "",
                surname: "",
                phone: "",
                address: "",
                education: "",
                parents_fullname: "",
                parent_phone: "",
            },
            saqlash: "Saqlash",
            toggle: false
        }
    },
    mounted(){
        this.edit()
    },
    methods: {
        save () {
            if(!this.$route.query.index){
                let arr = localStorage.list ? JSON.parse(localStorage.list) : [];
                arr.push(this.form);
                localStorage.list = JSON.stringify(arr);
                
                alert('Saqlandi');
                this.$router.push('/')
            }
            else{
                let list = JSON.parse(localStorage.list);
                let index = parseInt(this.$route.query.index);
                for(let i=0; i < list.length; i++) {
                    if(index === i) {
                        list[i] = this.form
                    }
                }
                localStorage.list = JSON.stringify(list);

                alert("O'zgardi");
                this.$router.push('/studentpage/' + index)
            }
        },
        edit () {
            if(this.$route.query.index){
                this.saqlash = "O'zgartirish";
                let list = JSON.parse(localStorage.list);
                let index = parseInt(this.$route.query.index);
                for(let i=0; i < list.length; i++) {
                    if(index === i) {
                        this.form = list[i]
                    }
                }
            }
            
        }
    }
}
</script>

<style>
.addStudent{
    padding: 33px 140px 20px 137px;
}
.addStudent .box{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.addStudent .left{
    width: 440px;
}
.addStudent .right{
    margin-left: 150px;
}
.addStudent .right h1{
    font-weight: 400;
    color: #898989;
    text-align: center;
    margin-bottom: 25px;
}
.inputs{
    margin-bottom: 3px;
}
.addStudent .right .col{
    margin-bottom: 10px;
    height: 150px;
}
.addStudent .right .adds{
    height: 225px !important;
    position: relative;
}
.adds .exit{
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  border: 1px solid #118AB2;
  background: #fff;
  padding: 9px;
  border-radius: 100%;
}
.inputs label{
    display: block;
    color: #898989;
    font-size: 12px;
}
.inputs input{
    outline: none;
    width: 100%;
    border: 1px solid #118AB2;
    padding: 0 5px;
    font-size: 20px;
}
.inputs input:focus{
    box-shadow: 0px 0px 12px #118AB2;
}
.save{
    display: flex;
    flex-wrap: wrap;
    margin-top: 35px;
}
.save button{
    padding: 9px 35px;
    border: 1px solid #118AB2;
}
.save button:hover{
    box-shadow: 0px 0px 12px #118AB2;
}
.save button:first-child{
    margin-right: 40px;
}
@media screen and (max-width: 1200px) {
    .addStudent .right{
        margin-left: 0;
    }
    .addStudent .box{
        justify-content: space-between;
    }
}
@media screen and (max-width: 991px) {
    .addStudent{
        padding: 20px 50px;
    }
    .addStudent .left{
        width: 400px;
    }
}
@media screen and (max-width: 768px) {
    .addStudent .left{
        width: 100%;
    }
    .addStudent .right{
        width: 100%;
        padding-top: 30px;
    }
    .addStudent .right>div{
        width: 100% !important;
        display: grid;
        grid-template-columns: repeat(auto-fill, 250px);
        grid-gap: 12px;
        justify-content: center;

    }
    .col{
        margin: 0 !important;
    }
    .adds{
        order: 10;
    }
}
@media screen and (max-width: 610px) {
    .addStudent{
        padding: 20px 12px;
    }
    .save{
        margin-top: 20px;
        justify-content: space-between;
    }
    .save button{
        padding: 4px 10px;
        margin-bottom: 10px;
    }
    .save button:first-child{
        margin-right: 0px;
    }
    .addStudent .right{
        padding-top: 20px;
    }
}
</style>