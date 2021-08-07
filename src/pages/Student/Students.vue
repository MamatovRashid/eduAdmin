<template>
  <div class="container students">
      <div class="main-head">
          <h1>O’quvchilar</h1>
          <div class="searchbox">
            <input class="search" type="text" placeholder="search student">
            <router-link to="/studentadd" class="add">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="25" r="24.5" fill="white" stroke="#118AB2"/>
                    <path d="M39.25 22.75H36.25V19.75C36.25 19.3375 35.9125 19 35.5 19H34C33.5875 19 33.25 19.3375 33.25 19.75V22.75H30.25C29.8375 22.75 29.5 23.0875 29.5 23.5V25C29.5 25.4125 29.8375 25.75 30.25 25.75H33.25V28.75C33.25 29.1625 33.5875 29.5 34 29.5H35.5C35.9125 29.5 36.25 29.1625 36.25 28.75V25.75H39.25C39.6625 25.75 40 25.4125 40 25V23.5C40 23.0875 39.6625 22.75 39.25 22.75ZM20.5 25C23.8141 25 26.5 22.3141 26.5 19C26.5 15.6859 23.8141 13 20.5 13C17.1859 13 14.5 15.6859 14.5 19C14.5 22.3141 17.1859 25 20.5 25ZM24.7 26.5H23.9172C22.8766 26.9781 21.7188 27.25 20.5 27.25C19.2812 27.25 18.1281 26.9781 17.0828 26.5H16.3C12.8219 26.5 10 29.3219 10 32.8V34.75C10 35.9922 11.0078 37 12.25 37H28.75C29.9922 37 31 35.9922 31 34.75V32.8C31 29.3219 28.1781 26.5 24.7 26.5Z" fill="#118AB2"/>
                </svg>
            </router-link>
          </div>
      </div>
      <div class="main-box">
          <div class="mbox">
            <router-link class="boxcard" :key="index+1" v-for="(item, index) in list" :to="`/studentpage/${index}`" tag="div">
                <student  :item="item" />
            </router-link>
          </div>
      </div>
  </div>
</template>

<script>
import student from '../../components/studentcard.vue';
export default {
    name: "Students",
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

<style>
    .container{
        text-align: center;
        margin-bottom: 20px;
        padding: 0 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main-head{
        padding: 36px 0 26px;
    }
    .main-head h1{
        font-size: 36px;
        font-weight: 400;
    }
    .searchbox{
        margin-top: 4px;
        display: flex;
        align-items: center;
    }
    .search{
        width: 250px;
        padding: 6px 10px;
        border: 1px solid #118AB2;
        border-radius: 7px;
        outline: none;
    }
    .search:focus{
        box-shadow: 0px 0px 5px #118AB2;
    }
    .search::placeholder{
        color: #c4c4c4;
    }
    .add{
        display: flex;
        margin-left: 45px;
    }
    .main-box{
        width: 100%;
    }
    .boxcard{
        width: 500px;
        max-width: 100%;
    }
    .mbox{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    @media screen and (max-width: 375px) {
        .main-head{
            padding: 20px 0 16px;
        }
        .main-head h1{
            font-size: 24px;
        }
        .add{
            margin-left: 20px;
        }
        .add svg{
            width: 40px;
            height: 40px;
        }
        .search{
            width: 200px;
            padding: 2px 8px;
        }
    }
</style>