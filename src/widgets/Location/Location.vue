<template>
  <div class="location">
    <Tooltip :offset="35">
      <template v-slot:reference>
        <div class="location__info" ref="info">
          <span class="location__icon"><LocationIcon /></span>
          <span class="location__text">{{ city }}</span>
        </div>
      </template>
      <template v-slot:content>
        <div class="tooltip-content">
          <div class="tooltip-content__title">Ваш город</div>
          <div class="tooltip-content__subtitle">{{ city }}</div>
          <div class="tooltip-content__buttons">
            <div class="tooltip-content__button" @click="close">
              <AlfaButton styling="primary" text="Да, верно" />
            </div>
            <div class="tooltip-content__button">
              <AlfaButton styling="secondary" text="Выбрать другой" />
            </div>
          </div>
          <div class="tooltip-content__close-button" @click="close">
            <BetaButton styling="beta-gamma-btn">
              <CloseIcon />
            </BetaButton>
          </div>
        </div>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { LocationIcon } from "../../shared/ui/icons";
import Tooltip from "../../shared/ui/Tooltip/Tooltip.vue";
import AlfaButton from "../../shared/ui/buttons/AlfaButton/AlfaButton.vue";
import BetaButton from "../../shared/ui/buttons/BetaButton/BetaButton.vue";
import { CloseIcon } from "../../shared/ui/icons";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Location",
  components: {
    LocationIcon,
    Tooltip,
    AlfaButton,
    BetaButton,
    CloseIcon,
  },
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  setup() {
    const info = ref(null);

    const close = () => {
      info.value.click();
    };
    return {
      close,
      info,
    };
  },
});
</script>

<style lang="scss" scoped>
.location {
  &__info {
    cursor: pointer;
  }

  &__icon {
    display: inline-block;
    width: 11px;
    height: 11px;
    margin-right: 8px;

    :deep path {
      transition: fill, opacity 0.3s ease-in-out;
    }
  }

  &__text {
    font-size: 14px;
    color: $clr-phi;
    transition: color 0.3s ease-in-out;
  }

  &:hover {
    .location__icon {
      :deep path {
        fill: $clr-zeta;
        opacity: 1;
      }
    }

    .location__text {
      color: $clr-zeta;
    }
  }
}
@media screen and (max-width: 374px) {
  .location {
    background-color: rebeccapurple;
    &__text {
      font-size: 13px;
    }
  }
}

.tooltip-content {
  position: relative;
  width: 378px;
  color: $clr-phi;

  &__title {
    line-height: 1.6;
  }

  &__subtitle {
    font-size: 18px;
    font-weight: $bold;
    line-height: 1.5;
    margin-bottom: 24px;
  }

  &__buttons {
    display: flex;
    justify-content: space-between;
  }

  &__button {
    width: 182px;
    height: 52px;
  }

  &__close-button {
    position: absolute;
    width: 11px;
    height: 11px;
    top: 0;
    right: 0;
  }
}
</style>
