<template>   
  <div id="app"> 
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <div id="nav">
            <b-nav tabs justified fill>         
              <b-nav-item><router-link to="/">Grupo</router-link></b-nav-item>
              <b-nav-item><router-link to="/indice">O que veremos?</router-link></b-nav-item>
              <b-nav-item><router-link to="/vue">O que é vue?</router-link></b-nav-item>
              <b-nav-item><router-link to="/historia">História</router-link></b-nav-item>
              <b-nav-item><router-link to="/utilidade">Para que serve?</router-link></b-nav-item>
              <b-nav-item><router-link to="/exemplos">Exemplos</router-link></b-nav-item>  
              <b-nav-item><router-link to="/referencias">Referencias</router-link></b-nav-item>          
            </b-nav> 
          </div>
        </b-col>      
      </b-row>
      <b-row>
        <b-col>
           <router-view/> 
        </b-col>      
      </b-row>  
    </b-container> 
  </div>     
</template>

<style>
.nav-link > a{
    display: block;
    padding: 0.5rem 1rem;
    color:#093363;
    background: transparent;
}
.nav-link > a:hover {
    display: block;
    padding: 0.5rem 1rem;
    color:#ffffff;
    background: #093363;
}

.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
   color:#ffffff !important;
    background: #093363 !important;
}

.nav-item > a{
    display: block;
    padding: 0.5rem 1rem;
    color:#093363;
    background: transparent;
    font-size: 20px;
}

.nav-item > a:hover{
    display: block;
    padding: 0.5rem 1rem;
    color:#093363;
    background: transparent;
}
  .card-header{
    font-size: 35px;
    color:#374c5f;
    text-align: center;
  }
  
  .card-body {   
    font-size: 30px;
    line-height: 35px;
    padding: 15px 40px;
    color:#374c5f !important;
  }
</style>