<template>
  <div class="container">
     <div class="columns is-multiline is-mobile">
       <div class="column is-3-desktop is-4-tablet is-6-mobile channel" v-for="channel in channels">
             <router-link :to="{ name: 'Channel', params: { id: channel.id }}">
               <div class="card">
                  <div class="card-image">
                    <figure class="image is-1by1">
                      <img :src="channel.snippet.thumbnails.high.url" alt="Image">
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="media">
                      <div class="media-content">
                        <p class="title is-4">{{ channel.snippet.title}}</p>
                      </div>
                    </div>

                    <div class="content">
                      {{ channel.snippet.description }}
                      <br>
                      <small>{{ channel.snippet.publishedAt}}</small>
                    </div>
                  </div>
                </div>
             </router-link>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Channels',
  data () {
    return {
      channelsID: ['UCpVm7bg6pXKo1Pr6k5kxG9A', 'UC4eYXhJI4-7wSWc8UNRwD4A', 'UCvQECJukTDE2i6aCoMnS-Vg', 'UCsooa4yRKGN_zEE8iknghZA', 'UCUdettijNYvLAm4AixZv4RA', 'UCuPgdqQKpq4T4zeqmTelnFg'],
      results: []
    }
  },
  mounted () {
    /* global axios */
    var url = 'https://www.googleapis.com/youtube/v3/channels?part=snippet&id=' + this.channelsID.join(',') + '&key=AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg&fields=items(snippet,id)'
    console.log(url)
    axios.get(url)
    .then(response => { this.results = response.data.items })
  }, // this.results = response.data.items
  computed: {
    channels: function () {
      this.results.forEach(x => (x.snippet.description = x.snippet.description.substr(0, 120)))
      return this.results
    }
  }
}
</script>
<style lang="scss">
.channel {
  max-width: 240px !important;
}

</style>
