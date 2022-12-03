<template>
  <div class="home">
    <img src="../assets/niffler.png">
   <div  id="formLogin">
    <form @submit.prevent="onSubmit">
      <div class="errorMessage" v-if="errorMessage">{{errorMessage}}</div>
        <div class="field-area">
          <div for="input-username" style="padding-right:10px;">Username</div>
          <input type="text"  id="input-username" v-model="username" placeholder="your user name">
        </div>

        <div class="field-area">
          <div for="input-username" style="padding-right:10px;">Password</div>
          <input type="text"  id="input-username" v-model="password" placeholder="your user name">
        </div>

        <div class="field-area">
            <button type="submit">Register</button>
        </div>

        <p>
          <router-link to="/login">already registered</router-link>
        </p>


    </form>
   </div>
  </div>
</template>

<script>


export default {
  data:()=>({
    errorMessage:null,
    
    username: null,
    password: null,
    accessLevel: null,
  

  
}),
  methods:{
    onSubmit(){
    }

  }

}
</script>

<style>
.field-area{
  display: flex;
}
</style>
