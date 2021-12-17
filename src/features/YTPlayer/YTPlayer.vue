<template>
  <div :id="id"></div>
</template>

<script lang="ts">
import {onMounted, onUpdated, ref, watch} from "vue";
import Player = YT.Player;

export default {
  name: "YTPlayer",
  props: {
    id: {
      type: String,
      required: true
    },
    videoUrl: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: false
    }
  },
  setup(props) {
    const videoId = props.videoUrl[0]?.split('/').pop()
    const player = ref<Player | null>()
    watch(props, () => {

    })
    onUpdated(() => {
      if (props.status === 'stop') {
        player.value.stopVideo()
      }
    })
    onMounted(() => {
      player.value = new YT.Player(props.id, {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          showinfo: 0,
        }
      });
    })
  }
}
</script>

<style lang="scss" scoped>

</style>