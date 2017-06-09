import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categories: null
  },
  mutations: {
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    loadCategories (context) {
      axios.get('http://localhost/yworld/app/index.php?url=categories/list')
        .then(response => {
          console.log(response)
          context.commit('SET_CATEGORIES', response.data.categories)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
})

export default store
