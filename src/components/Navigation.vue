<template>
  <nav class="nav has-shadow">
    <div class="container">
      <div class="nav-left">
        <router-link :to="{ name: 'Channels' }" class="nav-item">
          <h2>Youtube Knowledgebase</h2>
        </router-link>       
      </div>

      <div class="nav-right nav-menu">
        <li class="nav-item">
          <button class="button" type="button" @click="() => {this.dropdownOpen = !this.dropdownOpen}">
            Genres
          </button>
        </li>
        <div :class="[dropdownOpen ? 'is-open' : '', 'box', 'dropdown']">
          <ul>
          <span v-on:click="() => {this.dropdownOpen = !this.dropdownOpen}">
          <router-link v-for="category in categories" :key="category.id" class="nav-item" :to="{ name: 'Channels', params:{id: category.id} }">
             {{ category.title }}
          </router-link>
          </span>
          </ul>
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
      dropdownOpen: false
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
  margin-bottom: 20px;
}

.dropdown {
  box-shadow: 0 0 8px #777;
  display: none;
  right: 0;
  position: absolute;
  top: 100%;
  z-index: 1000;
}

.dropdown.is-open {
  display: block;
}

</style>
