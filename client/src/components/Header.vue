<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <span @click="navigateTo('/')">
        Weather
      </span>
    </v-toolbar-title>

    <v-toolbar-items>
      <v-btn flat dark>
          Vilnius
      </v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn v-if="!$store.state.isUserLoggedIn" @click="navigateTo('login')" flat dark>
          Login
        </v-btn>
        <v-btn v-if="!$store.state.isUserLoggedIn" @click="navigateTo('register')" flat dark>
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
