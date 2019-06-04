<template>  
  <div>
    <div > 
      <h1 class="title">História</h1>
    </div>
    <div>
      <b-tabs content-class="mt-3" align="center" pills card end>
        <b-tab title="Parte 1">
          <b-row align-h="center">
            <b-col cols="10">
              <b-card bg-variant="default" header="Evan You" class="justify-center">
                  <b-row no-gutters>
                    <b-col md="4">
                      <img src="../../public/img/evanyou.png" class="rounded-0"/>
                    </b-col>
                    <b-col md="8">
                      <b-card-body>                          
                          Quando Evan You, criador do Vue.js, estava trabalhando em um dos projetos do Google Creative Labs, ele precisava de uma interface de protótipo para UIs bem grandes.
                          <br><br>
                          Claramente, escrever uma grande quantidade de HTML repetido era consumir tempo e recursos, e é por isso que Evan começou a procurar alguma ferramenta já existente para essa finalidade.                         
                      </b-card-body>
                    </b-col>
                  </b-row>
              </b-card>
            </b-col>
          </b-row> 
        </b-tab>
        <b-tab title="Continuação">
          <b-row align-h="center">
            <b-col cols="8">
              <b-card bg-variant="default" header="" class="justify-center">
                  <b-row no-gutters>
                      <b-col md="12">
                      <b-card-body>
                        Para sua surpresa, descobriu que não havia nenhuma ferramenta, biblioteca ou framework que se adequasse exatamente ao seu propósito de prototipagem rápida.
                        <br><br>
                        E foi assim que surgiu a ideia de criar um framework que ajudaria na prototipagem rápida, oferecendo uma maneira fácil e flexível de ligação de dados reativos e componentes reutilizáveis.              
                      </b-card-body>
                    </b-col>
                  </b-row>
              </b-card>
            </b-col>
          </b-row>        
        </b-tab>        
      </b-tabs>
    </div>     
  </div>

</template>
<script>
export default {
  name: 'ViewHistoria',
  components: {   
    
  }
}
</script>
