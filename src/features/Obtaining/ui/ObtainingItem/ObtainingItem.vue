<template>
  <div class="obtaining-item">
    <div class="obtaining-item__radio">
      <RadioInput
        :text="title"
        :name="name"
        :id="id"
        @toggle="toggle"
        :value="name"
        :checked="isOpen"
      />
    </div>
    <div class="obtaining-item__body" :class="{ 'is-open': isOpen }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, ref} from "vue";
import { RadioInput } from "@/shared/ui/inputs";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "ObtainingItem",
  components: { RadioInput },
  props: {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore()
    const isOpen = computed(() => {
      return store.getters['order/getCurrentDelivery'] === props.id
    });
    const toggle = (id) => {
      store.commit('order/setNewCurrentId', id)
    };

    return {
      toggle,
      isOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.obtaining-item {
  // *** Radio *** //
  &__radio {
    background: #ecf0f8;
    border-radius: 16px;
  }

  &__body {
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    max-height: 0;
    margin-top: 22px;
  }

  &__body.is-open {
    max-height: 1000px;
  }

  // *** Radio END *** //

  // *** Body *** //
  // *** Body END *** //
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .obtaining-item {
    &__radio {
      background: #ecf0f8;
      border-radius: 16px;
      padding: 3px 0px;
      margin-bottom: 0;
    }
  }
}
</style>
