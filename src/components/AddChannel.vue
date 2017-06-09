<template>
  <div class="container">
  <div v-if="!info">
    <div class="has-text-centered">
      <h1 class="title is-1">Add New Channel</h1>
    </div>
    <br>
      <div class="field is-horizontal">
        <div class="field-label is-large">
          <label class="label">Channel Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-large" type="text" v-model="name" placeholder="Large sized input">
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-large">
          <label class="label">Channel ID</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="input is-large" type="text" v-model="id" placeholder="Large sized input">
            </div>
          </div>
        </div>
      </div>

      <div class="has-text-centered">
         <p>Add one of those two. We need channel id, but if tou just know the channel name from url, we can find the id for you</p>
          <br>
        <a class="button is-primary is-large" @click="add()">Go</a> 
      </div>
  </div>

    <div  v-if="info">
      <h2 class="title is-2">Is this what you are looking for?</h2>
      <div class="card">

        <div class="card-content columns">

          <div class="column is-one-quarter">
            <figure class="image is-4by4" style="max-width: 240px">
              <img :src="info.thumbnails.high.url" alt="Image">
            </figure>
          </div>

          <div class="column is-three-querters">

          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ info.title }}</p>
            </div>
          </div>     

            <div class="content">
              {{ info.description }}
              <br>
              <small class="is-pulled-right">{{ info.publishedAt }}</small>       
              <br>

              <div style="display: inline-block" class="columns is-multiline">
                <div style="display: inline-block" class="field column" v-for="category in categories">
                  <p class="control">
                    <label class="checkbox">
                      <input type="checkbox" :value="category.id" v-model="selectedCategories">
                      {{ category.title }}
                    </label>
                  </p>
                </div>
              </div>


            </div>
          </div>

        </div>
        <footer class="card-footer">
          <p class="card-footer-item">
            <button class="button is-success" @click="addToDatabase">
              Yes Add To Database
            </button>
          </p>
          <p class="card-footer-item">
            <span>
              <button class="button is-danger" @click="info=null">
                No Try Again
              </button>
            </span>
          </p>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default { // https://www.googleapis.com/youtube/v3/channels?key=AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg&forUsername=TEDEducation&part=id
  name: 'AddChannel',
  data () {
    return {
      name: '',
      id: '',
      info: null,
      selectedCategories: []
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    add () {
      this.id ? this.getChannelInfo() : this.getId()
    },
    getId () {
      var vm = this
      axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
          key: 'AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg',
          part: 'id',
          forUsername: this.name
        }
      })
      .then(function (response) {
        console.log(response.data.items[0].id)
        vm.id = response.data.items[0].id
        vm.getChannelInfo()
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    getChannelInfo () {
      var vm = this
      console.log('getting channel info ...')
      axios.get('https://www.googleapis.com/youtube/v3/channels', {
        params: {
          key: 'AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg',
          part: 'snippet',
          id: this.id,
          fields: 'items(snippet,id)'
        }
      })
      .then(response => {
        vm.info = response.data.items[0].snippet
      })
      .catch(error => { console.log(error) })
    },
    addToDatabase () {
      axios.post('http://localhost/yworld/app/index.php?url=channels/add', {
        y_id: this.id,
        title: this.info.title,
        description: this.info.description,
        published_at: this.info.publishedAt,
        thumbnail: this.info.thumbnails.high.url,
        categories: this.selectedCategories
      })
      .then(response => {
        console.log(response)
        if (response.data.status === 'SUCCESS') {
          this.$toaster.success('Channel has been added. ')
          this.info = ''
          this.name = ''
          this.id = null
          this.selectedCategories = []
        }
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
  
</style>
