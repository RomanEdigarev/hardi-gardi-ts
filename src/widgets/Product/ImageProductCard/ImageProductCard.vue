<template>
  <div class="product-image-card">
    <div class="product-image-card__content-container">
      <Card borderRadiusPX="25">
        <template v-slot:content>
          <img class="product-image-card__image" :src="imgPath" :alt="title" />
        </template>
      </Card>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {Card} from "@/shared/ui";

export default defineComponent({
  name: "ImageProductCard",
  components: {Card},
  props: {
    imgPath: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: 'image'
    }
  }
})
</script>

<style lang="scss" scoped>

.product-image-card {
  width: 100%;
  height: 100%;
  &__content-container {
    width: 100%;
    height: 100%;
    min-width: 270px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}



</style>