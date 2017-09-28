<template>
  <div>

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
import axios from 'axios'
import plyr from 'plyr'
export default {
  name: 'Videos',
  data () {
    return {
      videoId: null,
      videos: null,
      playlistId: null,
      modalActive: null,
      player: null,
      error: null,
      token: {
        next: null,
        prev: null
      }
    }
  },
  created () {
    if (this.$route.params.playlistId) {
      this.playlistId = this.$route.params.playlistId
      this.fetchVideos()
    } else {
      this.fetchUploadsId()
    }
  },
  mounted () {
  },
  methods: {
    paginate ($type) {
      if ($type === 'next') {
        this.token.next ? this.fetchVideos(this.token.next) : ''
      } else if ($type === 'prev') {
        this.token.prev ? this.fetchVideos(this.token.prev) : ''
      }
    },
    fetchUploadsId () {
      this.error = this.videos = null
      this.loading = true

      axios.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=' + this.$route.params.id + '&key=AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg&fields=items/contentDetails/relatedPlaylists/uploads')
      .then(response => {
        this.playlistId = response.data.items[0].contentDetails.relatedPlaylists.uploads
        this.fetchVideos()
      }).catch(error => { console.log(error) })
    },
    fetchVideos (pageToken) {
      // fetch uploads playlist videos
      axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
        params: {
          part: 'snippet',
          playlistId: this.playlistId,
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

<style>
  
</style>
