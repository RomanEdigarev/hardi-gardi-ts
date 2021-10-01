<template>
  <div class="prolog-card">
    <Card>
      <template v-slot:content>
        <div
          class="prolog-card__content"
          :style="`background-color: #${color}`"
        >
          <div class="prolog-card__image-wrapper">
            <slot name="image" />
          </div>

          <div class="prolog-card__title-wrapper">
            <span class="prolog-card__title">{{ title }}</span>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { Card } from "@/shared/ui";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrologCard",
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
.prolog-card {
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 22px 30px;
  }

  &__title-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex: 0.2;
  }

  &__title {
    width: 100%;
    font-size: 24px;
    text-align: center;
    font-weight: $bold;
    margin: 0;
    color: $clr-tau;
  }

  &__image-wrapper {
    width: 100%;
    height: 100%;
    max-height: 238px;
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;

    :deep img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
  .prolog-card {
    &__title {
      font-size: 16px;
      line-height: 1.12;
      /* or 112% */
    }
  }
}
</style>
