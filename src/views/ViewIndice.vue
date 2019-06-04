<template>  
  <div>
    <div > 
      <h1 class="title">Vue js</h1>
    </div>
    <div>
      <ol class="nomes">
        <li>O que é Vue.js ?</li>
        <li>História</li>
        <li>Pra que serve ?</li>
        <li>Exemplos</li>
      </ol>
    </div>    
  </div>

</template>

<style>

  .title{
    color:#fff;
    text-align: center;
    padding-top: 15px;
    text-decoration-line: underline;
  }
  .nomes{
    margin:200px 100px;
  }
  .nomes li{
    color:#fff;
    padding-bottom: 20px;
    font-size: 35px;
  }
</style>

<script>

export default {
  name: 'ViewIndice',
  components: {   
    
  }
}
</script>
