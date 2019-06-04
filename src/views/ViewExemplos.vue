<template>  
  <div>
    <div > 
      <h1 class="title">Exemplos</h1>
    </div>
    <div>
      <b-tabs content-class="mt-3" align="center" pills card>
        <b-tab title="v-if">
          <b-row align-h="center">
            <b-col cols="8">
              <b-card bg-variant="default" header="Diretiva v-if" class="justify-center">
                  <b-row no-gutters>                    
                    <b-col md="12">
                      <b-card-body>                          
                         <ComponentVIf/>                         
                      </b-card-body>
                    </b-col>
                  </b-row>
              </b-card>
            </b-col>
          </b-row> 
        </b-tab>

        <b-tab title="v-for">
          <b-row align-h="center">
            <b-col cols="8">
              <b-card bg-variant="default" header="Diretiva v-for" class="justify-center">
                  <b-row no-gutters>
                      <b-col md="12">
                      <b-card-body>
                       <ComponentVFor/> 
                      </b-card-body>
                    </b-col>
                  </b-row>
              </b-card>
            </b-col>
          </b-row>        
        </b-tab>

        <b-tab title="v-bind">
          <b-row align-h="center">
            <b-col cols="8">
              <b-card bg-variant="default" header="Diretiva v-bind" class="justify-center">
                  <b-row no-gutters>
                      <b-col md="12">
                      <b-card-body>
                       <ComponentVBind/> 
                      </b-card-body>
                    </b-col>
                  </b-row>
              </b-card>
            </b-col>
          </b-row>        
        </b-tab>  

        <b-tab title="v-model">
          <b-row align-h="center">
            <b-col cols="8">
              <b-card bg-variant="default" header="Diretiva v-model" class="justify-center">
                  <b-row no-gutters>
                      <b-col md="12">
                      <b-card-body>
                       <ComponentVModel/> 
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

import ComponentVIf from '../components/ComponentVIf'
import ComponentVFor from '../components/ComponentVFor'
import ComponentVModel from '../components/ComponentVModel'
import ComponentVBind from '../components/ComponentVBind'

export default {
  name: 'ViewExemplos',
  components: {   
    ComponentVIf,
    ComponentVFor,
    ComponentVModel,
    ComponentVBind,
  }
}
</script>
