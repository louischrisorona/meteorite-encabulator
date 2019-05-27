<template>
  <v-app dark>
    <v-toolbar app class="elevation-24 secondary">
      <div class="text-uppercase mx-auto text-xs-center accent--text display-2">Meteorite Turbo Encabulator</div>
    </v-toolbar>

    <v-content>
      <SearchMeteors/>
      <MeteorResults/>
    </v-content>
  </v-app>
</template>

<script>
import SearchMeteors from './components/SearchMeteors'
import MeteorResults from './components/MeteorResults'

export default {
  name: 'App',
  components: {
    SearchMeteors,
    MeteorResults
  },
  data () {
    return {
      //
    }
  }
}
</script>