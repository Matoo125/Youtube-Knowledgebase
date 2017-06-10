<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link :to="{ name: 'Channels' }" class="nav-item">
          <h2>Youtube Knowledgebase</h2>
        </router-link>       
      </div>

      <div class="nav-right nav-menu">
        <router-link v-for="category in categories" :key="category.id" class="nav-item" :to="category.id">
          {{ category.title }}
        </router-link>
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
nav {
  margin-bottom: 50px;
  background-color: green;
}



</style>
