<template>
  <div class="profile-options">
    <div class="tabs is-fullwidth">
      <ul>
          <router-link :to="{ name: 'ChannelVideos' }" class="link" tag="li">
            <a>
              <span class="icon">
               <i class="fa fa-play"></i>
              </span>
              <span>Videos</span>
            </a>
          </router-link>
          <router-link :to="{ name: 'ChannelPlaylists' }" class="link" tag="li">
            <a>
              <span class="icon">
               <i class="fa fa-list"></i>
              </span> 
              <span>Playlists</span>
            </a>
          </router-link>
          <router-link :to="{ path: '/123' }" class="link" tag="li">
            <a>
              <span class="icon">
               <i class="fa fa-heart"></i>
              </span> 
              <span>Favourites</span>
            </a>
          </router-link>
          <router-link :to="{ path: '/123' }" class="link" tag="li">
            <a>
              <span class="icon">
               <i class="fa fa-bookmark"></i>
              </span> 
              <span>Watchlist</span>
            </a>
          </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChannelSubnav',
  data () {
    return {

    }
  },
  created () {},
  methods: {

  }
}
</script>

<style>
  
</style>
