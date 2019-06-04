<template>
  <div> 
    <div>   
      <label v-bind:style="{color:cor}" v-html="label"></label>
      <input v-bind:placeholder="placeholder">      
    </div>
    <div>
      <button class="btn" v-bind:class="{'btn-primary':classePrimary, 'btn-danger':classeDanger}" v-on:click="alternarLogin(usuario)"> Alterar tipo de Login</button>
    </div>
    <div>
      <b-button v-b-modal.modal-bind class="float-right">Codigo v-bind</b-button>
      <b-modal size="xl" id="modal-bind" title="Code v-bind">
       <img src="../../public/img/code_bind.png" class="img-fluid" alt="Responsive image">
      </b-modal>
    </div>    
  </div>  
</template>
<script>
  export default {
    name: 'ComponentVBind',  
    data:function(){
    return {
      usuario: true,
      cor:'blue',
      label: 'Usuário',
      placeholder:'Digite seu username',
      classePrimary: true,
      classeDanger: false,
    }
  },
  methods: {
    alternarLogin: function(usuario){
      this.usuario = !usuario;
      console.log(this.usuario);
      if(this.usuario == true){
          this.label ="Usuário";
          this.cor='blue';
          this.placeholder = "Digite seu username";           
          this.classePrimary = true;
          this.classeDanger = false;        
      }else{
          this.label ="E-mail";
          this.cor='red';
          this.placeholder = "Informe seu E-mail";
          this.classePrimary = false;
          this.classeDanger = true;  
      }      
    }
  },  
  }
</script>
