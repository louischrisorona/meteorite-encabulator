<template>
  <v-app dark>
    <v-toolbar app class="elevation-24 secondary">
      <div class="text-uppercase mx-auto text-xs-center accent--text display-2">Meteorite Turbo Encabulator</div>
    </v-toolbar>

    <v-content>
      <SearchMeteors/>
    </v-content>
  </v-app>
</template>

<script>
import SearchMeteors from './components/SearchMeteors'

export default {
  name: 'App',
  components: {
    SearchMeteors
  }
}
</script>

<style>
  .container {

  }
</style>