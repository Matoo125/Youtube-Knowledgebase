<template>
  <div>
      <div class="columns is-multiline">
        <div class="column is-3" v-for="playlist in playlists">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by2">
                <img :src="thumbnail(playlist.snippet.thumbnails)" @click="playlistSelected(playlist.id)">
              </figure>
            </div>
            <div class="card-content">
              <div class="content">
                <p>{{ playlist.snippet.title }}</p>
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
export default {
  name: 'Playlists',
  data () {
    return {
      playlists: null,
      token: {
        next: null,
        prev: null
      }
    }
  },
  created () {
    this.fetchPlaylists()
  },
  beforeDestroy () {},
  methods: {
    fetchPlaylists (token) {
      axios({
        method: 'get',
        url: process.env.YAPI + 'playlists',
        params: {
          key: process.env.YKEY,
          channelId: this.$route.params.id,
          part: 'snippet,contentDetails',
          maxResults: 24,
          pageToken: token
        }
      }).then(response => {
        this.token.next = response.data.nextPageToken
        this.token.prev = response.data.prevPageToken
        this.playlists = response.data.items
      }).catch(error => { console.log(error) })
    },
    playlistSelected (id) {
      this.$router.push({ name: 'ChannelVideos', params: { id: this.$route.params.id, playlistId: id } })
    },
    paginate ($type) {
      if ($type === 'next') {
        this.token.next ? this.fetchPlaylists(this.token.next) : ''
      } else if ($type === 'prev') {
        this.token.prev ? this.fetchPlaylists(this.token.prev) : ''
      }
    },
    thumbnail (thumbnails) {
      if (thumbnails.high) { return thumbnails.high.url }
      if (thumbnails.medium) { return thumbnails.medium.url }
      if (thumbnails.standard) { return thumbnails.standard.url }
      return ''
    }
  }
}
</script>

<style>
  
</style>
