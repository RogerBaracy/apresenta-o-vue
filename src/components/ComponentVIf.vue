<template>
  <div>

    <template v-if="usuario == true">
      <label>Usuário</label>
      <input placeholder="Informe o nome de usuário">
    </template>

    <template v-else>
      <label>E-mail</label>
      <input placeholder="Informe o endereço de e-mail">
    </template>
    <div>
      <button class="btn btn-primary" v-on:click="alternarLogin(usuario)"> Alterar tipo de Login</button>
    </div>
    <div>
      <b-button v-b-modal.modal-if class="float-right">Codigo v-if</b-button>
      <b-modal size="xl" id="modal-if" title="Code v-if">
       <img src="../../public/img/code_if.png" class="img-fluid" alt="Responsive image">
      </b-modal>
    </div>   

  </div>  
</template>

<script>

export default {
  name: 'ComponentVIf',  
  data:function(){
    return {
      usuario: true,
    }
  },
  methods: {
    alternarLogin: function(usuario){
      this.usuario = !usuario;
    }
  },  
}
</script>
