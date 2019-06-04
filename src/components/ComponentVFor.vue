<template>
  <div>
    <input type=number v-model="n"/>
    <table>
      <tr v-for="m in multiplicadores" v-bind:key="m.index"> 
        <td>{{m.index}}</td> <td> X {{n}} = </td> <td>{{n * m.index}}</td> 
      </tr>
    </table> 
    <div>
      <b-button v-b-modal.modal-for class="float-right">Codigo v-for</b-button>
      <b-modal size="xl" id="modal-for" title="Code v-for">
       <img src="../../public/img/code_for.png" class="img-fluid" alt="Responsive image">
      </b-modal>
    </div>      
  </div>
  
</template>
<script>

export default {
  name: 'ComponentVFor',  
  data:function(){
    return {
      n: 0,
      multiplicadores:[
        {index:1},
        {index:2},
        {index:3},
        {index:4},
        {index:5},
        {index:6},
        {index:7},
        {index:8},
        {index:9},        
        {index:10}
      ] 
        
    }
  },  
}
</script>
