<template>
  <v-layout column>
    <v-flex>
      <panel title="Login">
          <div v-html="error" class="flash pt-2 pb-2"/>
          <v-text-field v-model="email" type="email" name="email" label="Email" placeholder="awesome@email.com"></v-text-field>
          <br>
          <v-text-field v-model="password" type="password" name="password" label="Password" placeholder="Password"></v-text-field>
          <br>
          <v-btn dark class="cyan" @click="login">Login</v-btn>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'root'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flash {
  color: red;
}
</style>
