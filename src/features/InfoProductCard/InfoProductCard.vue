<template>
  <div class="product-card-info">
    <div class="product-card-info__content-container">
      <Card borderRadiusPX="25">
        <template v-slot:content>
          <div class="product-card-info__content">
            <div class="product-card-info__title">{{ title }}</div>

            <div class="product-card-info__price">
              <div class="product-card-info__price__prev">
                {{ prevPrice }}&#8381;
              </div>
              <div class="product-card-info__price__current">
                {{ currentPrice }} &#8381;/шт
              </div>
            </div>
            <div class="product-card-info__description">{{ description }}</div>
          </div>
        </template>
      </Card>
    </div>

    <div class="product-card-info__favorite-btn">
      <FavoriteButton :isActive="true" />
    </div>
    <div class="product-card-info__shop-btn">
      <ShopButton />
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {useProductCard} from "@/features/InfoProductCard/lib";
import {Card} from "@/shared/ui";
import {FavoriteButton, ShopButton} from "@/shared/ui/buttons"

export default defineComponent({
  name: "InfoProductCard",
  components: {Card, FavoriteButton, ShopButton},
  setup() {
    const { card } = useProductCard();

    return {
      ...card,
    };

  },
})
</script>

<style lang="scss" scoped>
.product-card-info {
  width: 100%;
  height: 100%;
  position: relative;
  color: $clr-phi;

  &__content-container {
    width: 100%;
    height: 100%;
  }

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: $clr-alpha-delta;
    padding: 48px 36px;
  }

  &__title {
    font-size: 20px;
    font-weight: $bold;
    margin-bottom: 65px;
  }

  &__price {
    display: flex;
    align-items: center;
    margin-bottom: 27px;

    &__prev {
      font-size: 20px;
      font-weight: $bold;
      margin-right: 17px;
      text-decoration: line-through;
    }

    &__current {
      font-size: 28px;
      font-weight: $bold;
      color: $clr-zeta;
    }
  }

  &__description {
    line-height: 1.6;
  }

  &__favorite-btn,
  &__shop-btn {
    position: absolute;
    width: 60px;
    height: 60px;
    right: 15px;
  }

  &__favorite-btn {
    top: 15px;
  }

  &__shop-btn {
    bottom: 15px;
  }


}


</style>