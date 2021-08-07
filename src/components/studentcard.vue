<template>
  <div class="card1">
      <p class="name">{{ item.name }} {{ item.surname }} </p>
      <p class="tel">{{ item.phone }}</p>
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style scoped>
.card1{
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 22px 62px 22px 34px;
    width: 100%;
    box-shadow: 0px 0px 5px #118AB2;
    border-radius: 12px;
    margin-bottom: 8px;
}
.name{
    font-size: 18px;
}
.tel{
    font-size: 12px;
    color: #898989;
}
@media screen and (max-width: 425px) {
    .card1{
        padding: 15px 20px;
    }         
}
</style>