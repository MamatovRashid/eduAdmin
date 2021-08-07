<template>
  <div class="container group">
      <div class="main-head">
          <h1>Guruhlar</h1>
      </div>
      <div class="main-box">
        <div class="box">
          <div class="col" @click="toggle = true">
            <addcard/>
          </div>
          <div class="col " v-show="toggle">
            <div class="addgroupcard">
              <button class="exit" @click="toggle = false">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4118 9L17.529 3.88278C18.157 3.25483 18.157 2.2367 17.529 1.60824L16.3918 0.470966C15.7638 -0.156989 14.7457 -0.156989 14.1172 0.470966L9 5.58818L3.88278 0.470966C3.25483 -0.156989 2.2367 -0.156989 1.60824 0.470966L0.470966 1.60824C-0.156989 2.23619 -0.156989 3.25432 0.470966 3.88278L5.58818 9L0.470966 14.1172C-0.156989 14.7452 -0.156989 15.7633 0.470966 16.3918L1.60824 17.529C2.23619 18.157 3.25483 18.157 3.88278 17.529L9 12.4118L14.1172 17.529C14.7452 18.157 15.7638 18.157 16.3918 17.529L17.529 16.3918C18.157 15.7638 18.157 14.7457 17.529 14.1172L12.4118 9Z" fill="#118AB2"/>
                </svg>
              </button>
              <div class="selects">
                <label for="fan">Fan nomi:</label>
                <select name="fan" id="fan">
                  <option >Matematika</option>
                  <option >Fizika</option>
                  <option >Tarix</option>
                </select>
                <label for="num">Guruh raqami:</label>
                <select name="groupnum" id="num">
                  <option >1</option>
                  <option >2</option>
                  <option >3</option>
                </select>
                <label for="teacher">O'qituvchi:</label>
                <select name="teacher" id="teacher">
                  <option >Ali</option>
                  <option >Vali</option>
                  <option >Lali</option>
                </select>
              </div>
              <div>
                <button class="addgrcard">Qo’shish</button>
              </div>
            </div>
          </div>
          <div class="col">
            <router-link tag="div" to="/groupstudents">
              <groupcard/>
            </router-link>
          </div>
          <div class="col">
            <router-link tag="div" to="/groupstudents">
              <groupcard/>
            </router-link>
          </div>
          <div class="col">
            <router-link tag="div" to="/groupstudents">
              <groupcard/>
            </router-link>
          </div>
          <div class="col">
            <router-link tag="div" to="/groupstudents">
              <groupcard/>
            </router-link>
          </div>
          <div class="col">
            <router-link tag="div" to="/groupstudents">
              <groupcard/>
            </router-link>
          </div>
          <div class="col">
            <router-link tag="div" to="/groupstudents">
              <groupcard/>
            </router-link>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import groupcard from '../../components/cardGroup.vue';
import addcard from '../../components/addCard.vue';
// import addgroupcard from '../../components/addgrorpcard.vue';
export default {
  name: "Group",
  components: {
      groupcard,
      addcard,
      // addgroupcard
  },
  data() {
    return {
      toggle: false,
    };
  },
  mounted(){
    this.toggle = false
  }
}
</script>

<style scoped>
.addgroupcard{
  position: relative;
  text-align: left;
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 275px;
}
.addgroupcard .exit{
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  border: 1px solid #118AB2;
  background: #fff;
  padding: 9px;
  border-radius: 100%;
}
.addgroupcard label{
  font-size: 10px;
  line-height: 1;
  color: #c4c4c4;
}
.addgroupcard select{
  width: 70%;
  height: 30px;
  display: block;
  border: 1px solid #118AB2;
  outline: none;
  margin-bottom: 3px;
}
.addgroupcard .addgrcard{
  border: 1px solid #118AB2;
  color: #118AB2;
  font-size: 20px;
  margin: 0 auto;
  padding: 2px 15px;
}
.main-box{
  width: 100%;
  padding: 0 54px;
}
.box{
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 72px;
}
.col{
  display: block;
}
@media screen and (max-width: 991px) {
  .main-box{
    padding: 0;
  }
}
@media screen and (max-width: 767px) {
  .box{
    grid-gap: 30px;
  }
}
@media screen and (max-width: 575px) {
  .box{
    grid-gap: 20px;
  }
}
@media screen and (max-width: 375px) {
  .box{
    grid-template-columns: repeat(auto-fill, 100%);
  }
}
</style>