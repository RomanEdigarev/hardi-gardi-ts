<template>
  <div class="container">
    <div class="title">Присоединяйтесь</div>
    <div class="items">
      <a v-for="item in social" :href="item.url" class="item">
        <component :is="`${item.name}-icon`"></component>
      </a>
      <!--      <a href="#" class="item"><InstagramIcon /></a>-->
      <!--      <a href="#" class="item"><YouTubeIcon /></a>-->
      <!--      <a href="#" class="item"><VKIcon /></a>-->
      <!--      <a href="#" class="item"><TikTokIcon /></a>-->
      <!--      <a href="#" class="item"><FBIcon /></a>-->
    </div>
  </div>
</template>

<script lang="ts">
import {
  InstagramIcon,
  YouTubeIcon,
  VKIcon,
  TikTokIcon,
  FBIcon,
} from "../icons";
import { PropType } from "vue";
import { Social } from "@/entities/Shop/Social/model";

export default {
  name: "Social",
  components: {
    InstagramIcon,
    YouTubeIcon,
    VKIcon,
    TikTokIcon,
    FBIcon,
  },
  props: {
    social: {
      type: Object as PropType<Social>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title {
  color: $clr-tau;
  font-weight: $bold;
  font-size: 20px;
  margin-bottom: 19px;
}

.items {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.item {
  display: inline-block;
  width: 50px;
  height: 50px;
}

@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
  .container {
    margin: 0 auto;
  }
  .title {
    width: 100%;
    font-size: 16px;
    line-height: 20px;
    max-width: none;
  }
  .items {
    justify-content: center;
  }
}
</style>
