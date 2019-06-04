<template>
<div>
  <div>
    <input type="color" v-model="cor"/> {{cor}}
    <h3 v-bind:style="{color:cor}">Mudando a cor do texto com v-model</h3>       
  </div>
  <div>
    <hr>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>
  </div> 

   <div>
      <b-button v-b-modal.modal-model class="float-right">Codigo v-bind</b-button>
      <b-modal size="xl" id="modal-model" title="Code v-model">
       <img src="../../public/img/code_model.png" class="img-fluid" alt="Responsive image">
      </b-modal>
  </div>  
</div>
</template>

<script>
  export default {
    name: 'ComponentVModel',  
    data:function(){
      return {
        cor: '',
        checked: true,             
      }
    },
  }
</script>
