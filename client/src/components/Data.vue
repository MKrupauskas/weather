<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Data">
        <div v-for="item in weather" :key="item.title">
          {{ item.title }}
          {{ item.description }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import DataService from '@/services/DataService'
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      weather: null
    }
  },
  async mounted () {
    // make request to backend
    this.weather = await DataService.index()
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
