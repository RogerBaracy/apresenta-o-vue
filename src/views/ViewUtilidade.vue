<template>  
  <div>
    <div> 
      <h1 class="title">Vue js</h1>
    </div>
    <b-row align-h="center">
      <b-col cols="8">
        <b-card bg-variant="default" header="Para que serve?" class="justify-center">
            <b-row no-gutters>                         
              <b-col md="12">
                <b-card-body>                          
                    <ul>
                      <li>Construção de páginas SinglePage;</li>
                      <li>Reuso de código;</li>
                      <li>Consumir dados através de requisições Ajax;</li>
                      <li>Gerenciar projetos (VueCLI);</li>
                    </ul>
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
  li{
    line-height: 50px;
  }
</style>


<script>

export default {
  name: 'ViewUtilidade',
  components: {   
    
  }
}
</script>
