<template>  
  <div>
    <div > 
      <h1 class="title">Vue js</h1>
    </div>

    <b-row align-h="center">
      <b-col cols="8">
        <b-card bg-variant="default" header="O que é?" class="justify-center">
            <b-row no-gutters>
              <b-col md="3">
                <img src="../../public/img/vuejs.png" class="rounded-0"/>
              </b-col>
              <b-col md="9">
                <b-card-body>                          
                    É um framework progressivo do JavaScript de código aberto
                    (open source) para a construção de interfaces de usuário.
                    <br><br>
                    Foi projetado para ser adotado de forma incremental.
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </b-col>
    </b-row> 
  </div>

</template>

<style>  
  .card-header{
    font-size: 30px;
    color:#374c5f;
    text-align: center;
  }
  
  .card-body {   
    font-size: 30px;
    line-height: 35px;
    padding: 15px 40px;
    color:#374c5f;
  }
</style>


<script>

export default {
  name: 'ViewVue',
  components: {   
    
  }
}
</script>
