<template>
  <div id="app">
    <SearchMeteors @searchMeteorites="updateMeteors" />
    <MeteorResults :meteorite="childData" />

  </div>
</template>

<script>
import MeteorResults from './components/MeteorResults'
import SearchMeteors from './components/SearchMeteors'

export default {
  name: 'app',
  components: {
    MeteorResults,
    SearchMeteors
  },
  data () {
    return {
      childData: []
    }
  },
  methods: {
    updateMeteors(meteor) {
      this.childData.push(meteor)
    }
  }
}
</script>

<style>

</style>
