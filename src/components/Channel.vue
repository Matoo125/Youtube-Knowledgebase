<template>
  <div class="container">
  
<div style="display:flex;justify-content:center;align-items:center;" v-show="loading"><i class="fa fa-spinner fa-spin fa-4x"></i></div>

    <ChannelInfo></ChannelInfo>

    <transition name="modal" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <div class="modal animated is-active" v-show="modalActive">
        <div class="modal-background" @click="close"></div>
        <div class="modal-content animated " :class="[modalActive ? '' : 'zoomOut']">
            <div id="player" data-type="youtube" data-video-id></div>
        </div>
        <button class="modal-close" @click="close"></button>
      </div>
    </transition>

      <div class="columns is-multiline">
        <div class="column is-3" v-for="video in videos">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by2">
                <img :src="video.snippet.thumbnails.high.url" alt="" :id="video.snippet.resourceId.videoId" @click="play($event)">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p>{{ video.snippet.title }}</p>
              </div>
            </div>
            <!-- <footer class="card-footer">
              <a class="card-footer-item">Watchlist</a>
              <a class="card-footer-item">Like</a>
              <a class="card-footer-item">Saw</a>
            </footer> -->
          </div>

        </div>
    </div>

    <nav class="pagination">
      <a class="pagination-previous" @click="paginate('prev')" :disabled="!token.prev">Previous</a>
      <a class="pagination-next" @click="paginate('next')" :disabled="!token.next">Next page</a>
    </nav>

  </div>
</template>

<script>
import ChannelInfo from './ChannelInfo.vue'
export default {
  name: 'Channel',
  data () {
    return {
      loading: false,
      videoId: null,
      videos: null,
      uploads_id: null,
      modalActive: null,
      player: null,
      error: null,
      token: {
        next: null,
        prev: null
      }
    }
  },
  components: { ChannelInfo },
  created () {
    this.fetchUploadsId()
  },
  mounted () {
    setTimeout(() => this.fetchUploadsPlaylist(), 400)
  },
  methods: {
    paginate ($type) {
      if ($type === 'next') {
        this.token.next ? this.fetchUploadsPlaylist(this.token.next) : ''
      } else if ($type === 'prev') {
        this.token.prev ? this.fetchUploadsPlaylist(this.token.prev) : ''
      }
    },
    fetchUploadsId () {
      this.error = this.videos = null
      this.loading = true
      // get uploads playlist id
      /* global axios */
      axios.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=' + this.$route.params.id + '&key=AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg&fields=items/contentDetails/relatedPlaylists/uploads')
      .then(response => (this.uploads_id = response.data.items[0].contentDetails.relatedPlaylists.uploads))
    },
    fetchUploadsPlaylist (pageToken) {
      // fetch uploads playlist videos
      axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          playlistId: this.uploads_id,
          maxResults: 24, // max 50
          key: 'AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg',
          pageToken: pageToken
        }
      })
      .then(response => {
        this.videos = response.data.items
        this.token.next = response.data.nextPageToken
        this.token.prev = response.data.prevPageToken
        this.loading = false
      })
      .catch(error => console.log(error))
    },
    play (event) {
      // destroy player if exists
      if (this.player) {
        this.player.destroy()
        console.log('destroyed')
      }
      // set video id
      var element = document.querySelector('#player')
      element.setAttribute('data-video-id', event.currentTarget.id)
      /* global plyr */
      this.player = plyr.setup(document.querySelector('#player'))[0]
      // launch modal
      this.modalActive = true
      // play video
    },
    close () {
      this.modalActive = false
    }
  }
}
</script>
<style lang="scss">
.card-footer {
  margin-top: auto;
}
</style>
