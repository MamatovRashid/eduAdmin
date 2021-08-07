<template>
  <div class="groupCard">
      <div class="card">
          <div class="blueline"></div>
          <div class="box">
            <p class="f1">Fan nomi:</p>
            <p class="f2">Matematika</p>
            <p class="f1">Guruh raqami:</p>
            <p class="f2">2</p>
            <p class="f1">O'qituvchi:</p>
            <p class="f2">Azimov O'tkir</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.groupCard{
    text-align: left;
    overflow: hidden;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;
    height: 200px;
}
.card{
    display: flex;
    flex-direction: row;
    align-items: start;
    height: 100%;
}
.blueline{
    margin-left: 20px;
    background: #118AB2;
    width: 25px;
    height: 100%;
}
.box{
    padding: 25px 5px;
}
.f1{
    font-size: 12px;
    color: #898989;
}
.f2{
    font-size: 20px;
}
</style>