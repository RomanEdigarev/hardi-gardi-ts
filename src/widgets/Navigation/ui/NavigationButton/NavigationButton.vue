<template>
  <Tooltip>
    <template v-slot:reference>
      <div>
        <svg
          width="5"
          height="14"
          viewBox="0 0 5 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.72461" cy="1.75" r="1.75" fill="#D23C50" />
          <circle cx="2.72461" cy="7" r="1.75" fill="#D23C50" />
          <circle cx="2.72461" cy="12.25" r="1.75" fill="#D23C50" />
        </svg>
      </div>
    </template>

    <template v-slot:content>
      <div class="links">
        <router-link to="#" class="link">Наша история</router-link>
        <router-link to="#" class="link">Философия</router-link>
        <router-link to="#" class="link">Продукция и качество</router-link>
        <router-link to="#" class="link">Сотрудничество</router-link>
        <router-link to="#" class="link">Контакты</router-link>
      </div>
    </template>
  </Tooltip>
</template>
<script lang="ts">
import Tooltip from "@/shared/ui/Tooltip/Tooltip.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavigationButton",
  components: { Tooltip },
});
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.link {
  color: $clr-phi;
  white-space: nowrap;
  padding: 6px 0;
  line-height: 1.75;
  transition: text-shadow 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    text-shadow: 0 0 1px $clr-phi;
  }
}
</style>
