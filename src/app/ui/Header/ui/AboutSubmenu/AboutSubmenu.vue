<template>
  <div class="about-submenu">
    <router-link class="about-submenu__link" v-for="link in links" :to="link.link" @click="$emit('close-burger-menu')">
      {{link.name}}
    </router-link>
  </div>
</template>

<script lang="ts">
import {computed} from "vue";
import {useStore} from "@/services/vuex";

export default {
  name: "AboutSubmenu",
  setup() {
    const store = useStore()
    const links = computed(() => store.getters["shop/getTooltipMenu"]);

    return {
      links
    }
  }

}
</script>

<style lang="scss" scoped>
.about-submenu {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  &__link {
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #D23C50;
    margin-top: 18px;
  }
}

</style>