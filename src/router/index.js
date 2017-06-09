import Vue from 'vue'
import Router from 'vue-router'
import Channels from '@/components/Channels'
import Channel from '@/components/Channel'
import AddChannel from '@/components/AddChannel'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Channels',
      component: Channels
    },
    {
      path: '/channel/:id',
      name: 'Channel',
      component: Channel
    },
    {
      path: '/channels/add',
      name: 'AddChannel',
      component: AddChannel
    }
  ]
})
