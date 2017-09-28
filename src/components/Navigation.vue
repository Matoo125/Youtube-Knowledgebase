<template>
  <nav class="navbar has-shadow" role="navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{ name: 'Channels' }" class="navbar-item">
          <h2>Youtube Knowledgebase</h2>
        </router-link>       
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Genres
            </a>
            <div class="navbar-dropdown is-boxed">
              <router-link v-for="category in categories" 
                           :key="category.id" 
                           class="navbar-item" 
                           :to="{ name: 'Channels', params:{id: category.id} }">
                 {{ category.title }}
              </router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </nav>
</template>


<script>
export default {
  name: 'Navigation',
  data () {
    return {
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  }
}
</script>
<style lang="scss">

</style>
