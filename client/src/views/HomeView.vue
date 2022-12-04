<template>
  <div class="home">
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
          <div for="input-username" style="padding-right:10px;">accessLevel</div>
          <input type="text"   v-model="form.accessLevel" placeholder="your user name">
          <span v-show="rules.accessLevel">{{rules.accessLevel}}</span>
        </div>


        <div class="field-area">
            <button click="onSubmit" type="submit">Register</button>
        </div>

        <p>
          <router-link to="/login">already registered</router-link>
        </p>


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
      accessLevel: null,
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
      accessLevel: !this.form.accessLevel? " Required field":false,
    }
    },
    async onSubmit(){
      console.log('entrouuuuu')
      console.log(this.form)
      console.log(apiPublic)
      try{
        if(this.validate()) return;
        console.log('passouuu do validade')

        console.log(this.form);
        await apiPublic.post('/users',this.form)
        this.$router.push('/login')

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
