<template>
  <div class="packing-card">
    <Card>
      <template v-slot:content>
        <div class="packing-card__content" :class="{ unselected: !isSelected }">
          <div class="packing-card__container">
            <div class="packing-card__image-wrapper">
              <img
                class="packing-card__image"
                :src="require('./assets/img.png')"
                alt=""
              />
            </div>
            <div class="packing-card__name">{{ packingName }}</div>
          </div>
          <div class="packing-card__footer">
            <span class="packing-card__price">
              + {{ price || "0" }} &#8381;</span
            >
            <div class="packing-card__button">
              <BetaButton
                styling="beta-delta-btn"
                @click=""
                :is-confirm="isSelected"
                :size="'32'"
              >
                <PlusIcon v-if="!isSelected" />
              </BetaButton>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import Card from "../../../shared/ui/Card/Card.vue";
import { PlusIcon, ConfirmIcon } from "@/shared/ui/icons";
import { BetaButton } from "@/shared/ui/buttons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "PackingCard",
  components: {
    Card,
    BetaButton,
    PlusIcon,
    ConfirmIcon,
  },
  props: {
    packingName: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.packing-card {
  width: 276px;
  height: 454px;
  color: $clr-phi;

  &__content {
    width: 100%;
    height: 100%;
    background-color: $clr-tau;
    border: 3px solid $clr-zeta;
    border-radius: 25px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__container {
    height: 100%;
  }

  &__image-wrapper {
    height: 84.3%;
    max-height: 305px;
    overflow: hidden;
    border-radius: 16px;
    margin-bottom: 12px;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    padding: 0 6px;
    font-weight: $bold;
  }

  &__footer {
    width: 100%;
    display: flex;
    padding: 0 6px;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: 22px;
    font-weight: $bold;
    color: $clr-zeta;
  }

  &__button {
    width: 60px;
    height: 60px;
  }
}

.packing-card__content.unselected {
  border-color: transparent;
}

.unselected {
  background-color: $clr-kappa;
}
</style>
