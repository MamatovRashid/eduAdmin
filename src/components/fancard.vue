<template>
  <div class="fancard">
      <div class="card">
          <p class="f1">Fan nomi:</p>
          <p class="f2">Matemetika</p>
      </div>
      <div class="card">
          <p class="f1">Guruh raqami:</p>
          <p class="f2">2</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.fancard{
    height: 100%;
    padding: 25px 30px;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;
}
.card{
    margin-bottom: 8px;
}
.f1{
    font-size: 12px;
    color: #c4c4c4;
}
.f2{
    font-size: 20px;
}
</style>