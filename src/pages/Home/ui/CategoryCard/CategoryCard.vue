<template>
  <div class="category-card">
    <Card>
      <template v-slot:content>
        <div
          class="category-card__content"
          :style="{ backgroundColor: bgColor }"
        >
          <div class="category-card__title-container">
            <span class="category-card__title" :style="{ color: titleColor }">
              {{ title }}
            </span>
          </div>

          <div ref="svgContainer" class="category-card__svg-container">
            <slot name="svg-container"> </slot>
          </div>

          <div class="category-card__plus-btn-container">
            <button class="category-card__plus-btn">
              <svg
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2V25"
                  :stroke="titleColor"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 13H25"
                  :stroke="titleColor"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { Card } from "@/shared/ui";

export default defineComponent({
  name: "CategoryCard",
  components: {
    Card,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    bgColor: {
      type: String,
      required: true,
    },
  },
  setup() {
    const svgContainer = ref<HTMLElement>(null);
    let titleColor = ref("");

    onMounted(() => {
      const path = svgContainer.value.querySelector("path");
      titleColor.value = path.getAttribute("fill");
    });

    return {
      svgContainer,
      titleColor,
    };
  },
});
</script>

<style lang="scss" scoped>
.category-card {
  width: 100%;
  height: 100%;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
  &__content {
    width: 100%;
    height: 100%;
    padding: 34px 28px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__title-container {
    max-width: 68%;
  }

  &__svg-container {
    position: absolute;
    left: 50%;
    top: 60%;
    transform: translate(-50%, -50%);
  }

  &__plus-btn-container {
    width: 23px;
    height: 23px;
  }

  &__title {
    font-weight: $semi-bold;
    font-size: 28px;
    line-height: 1.2;
    white-space: break-spaces;
  }

  &__plus-btn {
    width: 100%;
    height: 100%;
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .category-card {
    width: 220px;
    &__svg-container {
      width: 100%;
      display: flex;
      justify-content: center;
      :deep svg {
        width: 74%;
        height: 100%;
      }
    }
    &__title {
      font-size: 22px;
      line-height: 27px;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .category-card {
    width: 100%;
    height: 100%;
    &__title {
      font-size: 22px;
    }
    &__content {
      padding: 22px;
    }
    &__svg-container {
      width: 38%;
      left: 70%;
      :deep svg {
        width: 100%;
        height: 100%;
        //max-height: 101px;
      }
    }
  }
}
</style>
