<template>
  <div class="container paymentPage">
      <div class="main-head">
          <h1>{{ user.name }} <br> {{ user.surname }}</h1>
          <p class="date">Dars boshlangan sana: <span>12.12.2020</span></p>
      </div>
      <div class="main-box">
          <div>
              <h1 class="fanN">Matematika</h1>
            <div class="box">
                    <div class="col">
                        <paymentCard/>
                    </div>
                    <div class="col" v-show="toggle">
                        <div class="enterpayment">
                            <button class="exitpayment"  @click="toggle = false">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.0327 8L15.5814 3.45136C16.1395 2.89318 16.1395 1.98818 15.5814 1.42955L14.5705 0.418636C14.0123 -0.139545 13.1073 -0.139545 12.5486 0.418636L8 4.96727L3.45136 0.418636C2.89318 -0.139545 1.98818 -0.139545 1.42955 0.418636L0.418636 1.42955C-0.139545 1.98773 -0.139545 2.89273 0.418636 3.45136L4.96727 8L0.418636 12.5486C-0.139545 13.1068 -0.139545 14.0118 0.418636 14.5705L1.42955 15.5814C1.98773 16.1395 2.89318 16.1395 3.45136 15.5814L8 11.0327L12.5486 15.5814C13.1068 16.1395 14.0123 16.1395 14.5705 15.5814L15.5814 14.5705C16.1395 14.0123 16.1395 13.1073 15.5814 12.5486L11.0327 8Z" fill="white"/>
                                </svg>
                            </button>
                            <label for="oy">Oy:</label>
                            <select name="month" id="oy">
                                <option >Yanvar</option>
                                <option >Fevral</option>
                                <option >Mart</option>
                            </select>
                            <label for="narx">To’lov miqdori:</label>
                            <input type="number">
                        </div>
                    </div>
                    <div class="col">
                        <button class="addpayment"  @click="toggle = true">
                            <div class="info">
                                <span>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                        d="M22.2857 9.42857H14.5714V1.71429C14.5714 0.767679 13.8038 0 12.8571 0H11.1429C10.1962 0 9.42857 0.767679 9.42857 1.71429V9.42857H1.71429C0.767679 9.42857 0 10.1962 0 11.1429V12.8571C0 13.8038 0.767679 14.5714 1.71429 14.5714H9.42857V22.2857C9.42857 23.2323 10.1962 24 11.1429 24H12.8571C13.8038 24 14.5714 23.2323 14.5714 22.2857V14.5714H22.2857C23.2323 14.5714 24 13.8038 24 12.8571V11.1429C24 10.1962 23.2323 9.42857 22.2857 9.42857Z"
                                        fill="#118AB2"
                                        />
                                    </svg>
                                </span>
                                <p>To’lov kartasi qo’shish</p>
                            </div>
                            <div class="blue"></div>
                        </button>
                    </div>
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.fanN{
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 18px;
}
.date{
    margin-top: 20px;
    font-size: 18px;
}
.date span{
    font-weight: 400;
    font-size: 18px;
}
.main-box{
    text-align: left;
    width: 100%;
    padding: 0 54px;
}
.box{
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    grid-gap: 50px;
    justify-content: center;
}
@media screen and (max-width: 991px) {
    .main-box{
        padding: 0 10px;
    }
    .box{
        grid-gap: 20px;
    }
}
@media screen and (max-width: 375px) {
    .main-box{
        padding: 0;
    }
    .box{
        grid-template-columns: 100%;

        grid-gap: 12px;
    }
    .main-head{
        padding: 20px 0 8px;
    }
    .main-head h1{
        line-height: 1.2;
    }
    .date{
        margin-top: 10px;
    }
}

.addpayment{
    height: 180px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;
}
.enterpayment{
    height: 100%;
    width: 100%;
    position: relative;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;  
    padding: 35px 40px;
}
.exitpayment{
    position: absolute;
    top: -12px;
    right: -12px;
    background: #118AB2;
    width: 36px;
    height: 36px;
    padding: 10px;
    border-radius: 100%;
}
.addpayment p{
    font-size: 10px;
    color: #118AB2;
}
.blue{
    margin-right: 45px;
    width: 65px;
    height: 100%;
    background: #118AB2;
}
.info{
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
label, select, input{
    display: block;
}
label{
    font-size: 12px;
    color: #898989;
}
select, input{
    outline: none;
    padding: 3px;
    border: 1px solid #118AB2;
    font-size: 20px;
    width: 150px;
}
</style>