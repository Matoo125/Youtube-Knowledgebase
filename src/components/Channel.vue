<template>
  <div class="container">
  
<div style="display:flex;justify-content:center;align-items:center;" v-show="loading"><i class="fa fa-spinner fa-spin fa-4x"></i></div>

    <ChannelInfo></ChannelInfo>

    <router-view></router-view>

  </div>
</template>

<script>
import ChannelInfo from './ChannelInfo.vue'
export default {
  name: 'Channel',
  data () {
    return {
      loading: false
    }
  },
  components: { ChannelInfo }

}
</script>

</style>
