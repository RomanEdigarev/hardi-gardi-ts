<template>
  <div class="home-product-card" :class="{ isReverse }">
    <!-- Product Image -->
    <div class="home-product-card__image-wrapper">
      <Card borderRadiusPX="25">
        <template v-slot:content>
          <img class="home-product-card__image" :src="img" :alt="title" />
        </template>
      </Card>
    </div>

    <!-- Product Info -->
    <div class="home-product-card__info-wrapper">
      <Card borderRadiusPX="25">
        <template v-slot:content>
          <div class="home-product-card__info">
            <div class="home-product-card__title">{{ title }}</div>

            <div class="home-product-card__price">
              <div class="home-product-card__price__prev">
                {{ prevPrice }}&#8381;
              </div>
              <div class="home-product-card__price__current">
                {{ currentPrice }} &#8381;/шт
              </div>
            </div>

            <div class="home-product-card__description">{{ description }}</div>
          </div>
        </template>
      </Card>

      <!-- buttons -->
      <div class="home-product-card__favorite-btn">
        <FavoriteButton :isActive="isFavorite" />
      </div>
      <div class="home-product-card__shop-btn">
        <ShopButton />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {InfoProductCard} from "@/features"

export default defineComponent({
  name: "ProductCardHome",
  components: {InfoProductCard},
  props: {
    isReverse: {
      type: Boolean,
      default: false,
    },
    isFavorite: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style lang="scss" scoped>
.home-product-card {
  width: 100%;
  height: 100%;
  display: flex;
  color: $clr-phi;

  &__image-wrapper {
    height: 100%;
    min-width: 270px;
    flex: 0.4;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.isReverse {
  flex-direction: row-reverse;
}
</style>
