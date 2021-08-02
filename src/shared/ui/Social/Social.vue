<template>
  <div class="container">
    <div class="title">Присоединяйтесь</div>
    <div class="items">
      <a href="#" class="item"><InstagramIcon /></a>
      <a href="#" class="item"><YouTubeIcon /></a>
      <a href="#" class="item"><VKIcon /></a>
      <a href="#" class="item"><TikTokIcon /></a>
      <a href="#" class="item"><FacebookIcon /></a>
    </div>
  </div>
</template>

<script lang="ts">
import {
  InstagramIcon,
  YouTubeIcon,
  VKIcon,
  TikTokIcon,
  FacebookIcon,
} from "../icons";

export default {
  name: "Social",
  components: {
    InstagramIcon,
    YouTubeIcon,
    VKIcon,
    TikTokIcon,
    FacebookIcon,
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
  justify-content: space-between;
}

.item {
  display: inline-block;
  width: 50px;
  height: 50px;
}
</style>
