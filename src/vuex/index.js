import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    categories: null,
    channel: {
      id: null,
      info: null
    }
  },
  mutations: {
    SET_CATEGORIES (state, categories) {
      state.categories = categories
    },
    SET_CHANNEL_INFO (state, info) {
      state.channel.info = info
    }
  },
  actions: {
    loadCategories (context) {
      axios.get(process.env.API + 'categories/list')
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
