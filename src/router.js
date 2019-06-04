import Vue from 'vue'
import Router from 'vue-router'
import ViewGrupo from './views/ViewGrupo.vue'
import ViewIndice from './views/ViewIndice.vue'
import ViewVue from './views/ViewVue.vue'
import ViewHistoria from './views/ViewHistoria.vue'
import ViewUtilidade from './views/ViewUtilidade.vue'
import ViewExemplos from './views/ViewExemplos.vue'
import ViewReferencias from './views/ViewReferencias.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ViewGrupo',
      component: ViewGrupo
    },
    
    {
      path: '/indice',
      name: 'ViewIndice',
      component: ViewIndice
    },
    
    {
      path: '/vue',
      name: 'ViewVue',
      component: ViewVue
    }, 
    
    {
      path: '/historia',
      name: 'ViewHistoria',
      component: ViewHistoria
    },

    {
      path: '/utilidade',
      name: 'ViewUtilidade',
      component: ViewUtilidade
    },

    {
      path: '/exemplos',
      name: 'ViewExemplos',
      component: ViewExemplos
    },

    {
      path: '/referencias',
      name: 'ViewReferencias',
      component: ViewReferencias
    },
   
  ]
})
