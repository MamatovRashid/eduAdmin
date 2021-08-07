<template>
  <div class="paymentCard">
      <div class="box">
          <p class="f1">Oy:</p>
          <p class="f2">Dekabr</p>
      </div>
      <div class="box">
          <p class="f1">To’lov miqdori:</p>
          <p class="f2">50, 000 so’m</p>
      </div>

    <div class="blue">

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.paymentCard{
    position: relative;
    overflow: hidden;
    height: 180px;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;
    text-align: left;
    padding: 35px 40px;
}
.blue{
    width: 65px;
    height: 100%;
    background: #118AB2;
    position: absolute;
    top: 0;
    right: 45px;
}
.box{
    margin-bottom: 7px;
}
.f1{
    font-size: 12px;
    color: #898989;
}
.f2{
    font-size: 20px;
}
</style>