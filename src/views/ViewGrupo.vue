<template>  
  <div>
    <div > 
      <h1 class="title">Vue js</h1>
    </div>
    <div>
      <ul class="nomes">
        <li>Jeson</li>
        <li>Roger Baracy</li>
        <li>Vitor</li>
      </ul>
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
  name: 'ViewGrupo',
  components: {   
    
  }
}
</script>
