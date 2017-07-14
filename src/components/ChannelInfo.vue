<template>
  <div v-if="snippet">
    <div class="section profile-heading">
      <div class="columns">
        <div class="column is-2">
          <div class="image is-128x128 avatar">
            <img :src="snippet.thumbnails.high.url">
          </div>
        </div>
        <div class="column is-4 name">
          <p>
            <span class="title is-bold">{{ snippet.title }}</span>
            <a class="button is-primary is-outlined follow" target="_blank" :href="ytblink()">Link</a>
          </p>
          <p class="tagline">{{ shorten(snippet.description, 100) }} 
          <a v-if="readmore.show" @click="() => { readmore.active = true }">Read More</a>
          <a v-if="readmore.active" @click="() => { readmore.active = false }">Show Less</a>
          </p>
        </div>
        <div class="column is-2 followers has-text-centered">
          <p class="stat-val">{{ round(statistics.videoCount) }}</p>
          <p class="stat-key">videos</p>
        </div>
        <div class="column is-2 following has-text-centered">
          <p class="stat-val">{{ round(statistics.viewCount) }}</p>
          <p class="stat-key">views</p>
        </div>
        <div class="column is-2 likes has-text-centered">
          <p class="stat-val">{{ round(statistics.subscriberCount) }}</p>
          <p class="stat-key">subscribers</p>
        </div>
      </div>
    </div>
    <!--
    <div class="profile-options">
      <div class="tabs is-fullwidth">
        <ul>
          <li class="link is-active"><a><span class="icon"><i class="fa fa-list"></i></span> <span>My Lists</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-heart"></i></span> <span>My Likes</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-th"></i></span> <span>My Posts</span></a></li>
          <li class="link"><a><span class="icon"><i class="fa fa-bookmark"></i></span> <span>My Bookmarks</span></a></li>
        </ul>
      </div>
    </div>
    -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ChannelInfo',
  data () {
    return {
      snippet: null,
      statistics: null,
      readmore: {
        show: false,
        active: false
      }
    }
  },
  created () {
    this.fetchChannelInfo()
  },
  methods: {
    fetchChannelInfo () {
      axios({
        method: 'get',
        url: 'https://www.googleapis.com/youtube/v3/channels',
        params: {
          key: 'AIzaSyB-rHXLjy6DQXZn3irtKEgl9-hpjjU2LFg',
          part: 'snippet,statistics',
          id: this.$route.params.id
        }
      }).then(response => {
        console.log(response)
        this.snippet = response.data.items[0].snippet
        this.statistics = response.data.items[0].statistics
      }).catch(error => { console.log(error) })
    },
    round (number) {
      if (number < 1000) {
        return number
      } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + ' k'
      } else if (number < 1000000000) {
        return (number / 1000000).toFixed(1) + ' m'
      } else {
        return (number / 1000000000).toFixed(1) + ' b'
      }
    },
    shorten (string, limit) {
      if (string.length <= limit || this.readmore.active) {
        this.readmore.show = false
        return string
      } else {
        this.readmore.show = true
        return string.substring(0, limit) + ' ...'
      }
    },
    ytblink () {
      return 'http://youtube.com/channel/' + this.$route.params.id
    }
  }
}
</script>

<style>
  body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
.container.profile {
  margin-top:50px;
}
.profile-heading {
  margin: 20px 0;
  padding-bottom: 30px;
}
.profile-heading .name {
  border-right: 1px solid #f1f1f1;
  margin:-30px 0;
  padding: 40px 30px 0 30px;
}
.profile-heading .followers, .profile-heading .following {
  border-right: 1px solid #f1f1f1;
  margin:-30px 0;
  padding: 70px 30px;
}
.profile-heading .likes {
  margin:-30px 0;
  padding: 70px 30px;
}
.profile-heading .stat-key {
  font-size: 20px;
  font-weight: 200;
}
.profile-heading .stat-val {
  font-size: 35px;
  font-weight: bold;
}
.profile-options {
  background-color: #f1f1f1;
  margin:-20px 0 20px 0;
}
.profile-options .link a {
  padding:18px;
  font-size: 18px;
}
.profile-options .link .icon {
  font-size: 16px;
  padding-top:2px;
}
.tagline {
  padding:20px 0;
  font-size: 16px;
  line-height: 1.4;
}
.avatar {
  float: right;
}
.follow {
  float: right;
}
.avatar img {
  border-radius: 200px;
}
p.title.is-bold {
  font-weight: bold;
}
.card .timestamp {
  float:right;
  color:#bbb;
}
</style>
