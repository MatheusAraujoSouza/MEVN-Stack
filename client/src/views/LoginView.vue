<template>
  <div class="login">
    <img src="../assets/niffler.png">
   <div  id="formLogin">
    <form @submit.prevent="onSubmit">
      <div class="errorMessage" v-if="errorMessage">{{errorMessage}}</div>
        <div class="field-area">
          <div for="input-username" style="padding-right:10px;">Username</div>
          <input type="text" :class="{'error':rules.username}"  v-model="form.username" placeholder="your user name">
            <span v-show="rules.username">{{rules.username}}</span>
        </div>

        <div class="field-area">
          <div for="input-username" style="padding-right:10px;">Password</div>
          <input type="text"  v-model="form.password" placeholder="your user name">
          <span v-show="rules.password">{{rules.password}}</span>
        </div>

        <div class="field-area">
            <button @click="onSubmit" type="submit">Login</button>
        </div>

    </form>
   </div>
  </div>
</template>

<script>

import {apiPublic} from '../services/api'
export default {
  data:()=>({
    errorMessage:null,
    form:{
      username: null,
      password: null,
    },
    rules:{
      username: null,
      password: null,
      accessLevel: null,
    }
}),
  methods:{
    validate(){
      this.rules={
      username: !this.form.username? " Required field":false,
      password: !this.form.password? " Required field":false,
    }
    },
    async onSubmit(){
      try{
        if(this.validate()) return;
        const response = await apiPublic.post('/users/authenticate',this.form)
        localStorage.setItem('token',response.data.token)
        localStorage.setItem('username',response.data.username)
        this.$router.push("/secreatArea")

      }catch(error){
        console.log(error)
      }


    }

  }

}
</script>

<style>
.field-area{
  display: flex;
  margin: 20px;
}
</style>