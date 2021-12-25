<template>
  <div class="help-submenu">
    <router-link class="help-submenu__link" v-for="link in footerMenu" :to="link.link" @click="$emit('close-burger-menu')">
      {{link.name}}
    </router-link>
  </div>
</template>

<script lang="ts">
import {useFooterMenu} from "@/app/ui/Footer/lib";

export default {
  name: "HelpSubmenu",
  setup() {
    return {
      footerMenu: useFooterMenu(),
    };
  }

}
</script>

<style lang="scss" scoped>
.help-submenu {
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