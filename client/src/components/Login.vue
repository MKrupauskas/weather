<template>
  <v-layout column>
    <v-flex>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <div v-html="error" class="flash pt-2 pb-2"/>
          <v-text-field v-model="email" type="email" name="email" label="Email" placeholder="awesome@email.com"></v-text-field>
          <br>
          <v-text-field v-model="password" type="password" name="password" label="Password" placeholder="Password"></v-text-field>
          <br>
          <v-btn dark class="cyan" @click="login">Login</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flash {
  color: red;
}
</style>
