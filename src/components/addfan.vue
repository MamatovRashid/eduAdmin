<template>
  <div class="addfan">
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
    </div>
    <div>
      <button class="addgr">Qo’shish</button>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.addfan{
    height: 100%;
    width: 100%;
    box-shadow: 0px 0px 12px #118AB2;
    border-radius: 12px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.addfan label{
  font-size: 10px;
  line-height: 1;
  color: #c4c4c4;
}
.addfan select{
  width: 100%;
  border: 1px solid #118AB2;
  outline: none;
  margin-bottom: 3px;
}
.addfan .addgr{
  border: 1px solid #118AB2;
  color: #118AB2;
  font-size: 20px;
  margin: 0 auto;
  padding: 2px 15px;
}
</style>