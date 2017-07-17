<template>
  <div class="container">
     <div class="columns is-multiline is-mobile is-centered">
       <div class="column is-3-desktop is-4-tablet is-6-mobile channel" v-for="channel in channels">
             <router-link :to="{ name: 'ChannelVideos', params: { id: channel.y_id }}">
               <div class="card">
                  <div class="card-image">
                    <figure class="image is-1by1">
                      <img :src="channel.thumbnail" alt="Image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">{{ channel.title}}</p>
                      </div>
                    </div>

                  </div>
                </div>
             </router-link>
       </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Channels',
  data () {
    return {
      channels: []
    }
  },
  mounted () {
    var url
    if (this.$route.params.id) {
      url = 'channels/listByCategory/' + this.$route.params.id
    } else {
      url = 'channels/list'
    }
    axios.get(process.env.API + url)
    .then(response => {
      console.log(response)
      this.channels = response.data.channels
      // this.loadChannelsFromYoutube()
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
<style lang="scss">
.is-centered {
  justify-content: center;
}
.channel {
  max-width: 240px !important;
}
.card {
    display:flex;
    flex-direction: column;
    height: 100%;
}
.cart-footer {
    margin-top: auto;
}
</style>
