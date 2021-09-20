<template>
  <div class="obtaining-item">
    <div class="obtaining-item__radio">
      <RadioInput :text="title" :name="name" :id="id" @toggle="toggle" />
    </div>
    <div class="obtaining-item__body" :class="{ 'is-open': isOpen }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { RadioInput } from "@/shared/ui/inputs";

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
    const isOpen = ref(false);
    const toggle = (id) => {
      isOpen.value = props.id === id;
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
    margin-bottom: 22px;
  }
  &__body {
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
    max-height: 0;
  }
  &__body.is-open {
    max-height: 1000px;
  }
  // *** Radio END *** //

  // *** Body *** //
  // *** Body END *** //
}
</style>
