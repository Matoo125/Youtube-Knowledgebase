<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'app',
  components: { Navigation },
  mounted () {
    if (this.$store.state.categories === null) {
      this.$store.dispatch('loadCategories')
    }
  }
}
</script>

<style>

</style>

<!-- UCpVm7bg6pXKo1Pr6k5kxG9A nat geo -->
