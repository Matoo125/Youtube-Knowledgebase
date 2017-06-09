<template>
  <div class="container">
     <div class="columns is-multiline is-mobile">
       <div class="column is-3-desktop is-4-tablet is-6-mobile channel" v-for="channel in channels">
             <router-link :to="{ name: 'Channel', params: { id: channel.y_id }}">
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
    axios.get('http://localhost/yworld/app/index.php?url=channels/list')
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
