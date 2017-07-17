import Vue from 'vue'
import Router from 'vue-router'
import Channels from '@/components/Channels'
import Channel from '@/components/Channel'
import ChannelVideos from '@/components/Videos'
import ChannelPlaylists from '@/components/Playlists'
import AddChannel from '@/components/AddChannel'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/:id?',
      name: 'Channels',
      component: Channels
    },
    {
      path: '/channel/:id',
      name: 'Channel',
      component: Channel,
      children: [
        {
          path: 'videos/:playlistId?',
          name: 'ChannelVideos',
          component: ChannelVideos
        },
        {
          path: 'playlists',
          name: 'ChannelPlaylists',
          component: ChannelPlaylists
        }
      ]
    },
    {
      path: '/channels/add',
      name: 'AddChannel',
      component: AddChannel
    }
  ]
})
