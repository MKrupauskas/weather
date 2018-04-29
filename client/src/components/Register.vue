<template>
  <div>
    <h1>Weather</h1>
    <!-- <p>{{ msg }}</p> -->
    <label for="email">Email</label>
    <input v-model="email" type="email" name="email" id="email" placeholder="awesome@email.com">
    <label for="password">Password</label>
    <input v-model="password" type="password" name="password" id="password" placeholder="Password">
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
