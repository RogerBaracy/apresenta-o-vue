<template>  
  <div>
    <div > 
      <h1 class="title">Vue js</h1>
    </div>
    <div>
      <ul class="nomes">
        <li><a href="https://github.com/vuejs-br/empresas-que-usam-vue-no-brasil">Empresas que utilizam VueJS</a></li>
          <ul>
            <li><a href="http://agileti.com.br/site/">Agile Consultoria em T.I</a></li>
            <li><a href="https://imasters.com.br">Imasters we are developers</a></li>
            <li><a href="https://www.boticario.com.br">O Boticário</a></li>
          </ul>
        <li><a href="https://br.vuejs.org/">Documentação do Vuejs - vuejs.org</a></li>
        <li><a href="https://www.devmedia.com.br/vue-js-tutorial/38042">História e Tutorial - Devmedia</a></li>
        <li><a href="https://youtu.be/07-TvnH7XNo">Vue JS do jeito Ninja - Playlist do Youtube</a></li>
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
    margin:20px 100px;
  }
  .nomes li a{
    color:#fff;
    padding-bottom: 20px;
    font-size: 25px;
  }
</style>

<script>

export default {
  name: 'ViewReferencias',
  components: {   
    
  }
}
</script>
