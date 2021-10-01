<template>
  <div class="subscription">
    <div class="subscription__content">
      <div class="subscription__info">
        <div class="subscription__title">Будь в курсе</div>
        <div class="subscription__text">
          Подпишитесь на обновления <br />
          и узнавайте о новинках и специальных предложениях первым:
        </div>
      </div>

      <div class="subscription__input">
        <FooterInput />
      </div>
    </div>

    <div class="subscription__social">
      <Social :social="social" />
    </div>
  </div>
</template>

<script lang="ts">
import FooterInput from "./ui/Input/Input.vue";
import Social from "@/shared/ui/Social/Social.vue";
import { Social as SocialType } from "@/entities/Shop/Social/model";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Subscription",
  components: {
    FooterInput,
    Social,
  },
  props: {
    social: {
      type: Object as PropType<SocialType>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.subscription {
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  &__content {
    display: flex;
    align-items: flex-end;
    flex: 0.7;
  }

  &__info {
    flex: 0.5;
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 12px;
  }

  &__text {
    line-height: 1.55;
  }

  &__input {
    flex: 0.5;
  }

  &__social {
    flex: 0.25;
    height: 100%;
  }
}

@media screen and (min-width: 738px) and (max-width: 1364px), (-webkit-min-device-pixel-ratio: 3) {
  .subscription {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    &__content {
      flex-direction: column;
      width: 100%;
    }
    &__info {
      width: 100%;
    }
    &__input {
      width: 100%;
      flex: 1;
      margin-bottom: 75px;
    }
    &__text {
      margin-bottom: 42px;
    }
    &__social {
      width: 70%;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px), (-webkit-min-device-pixel-ratio: 3) {
  .subscription {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    &__content {
      flex-direction: column;
      width: 100%;
    }
    &__info {
      width: 100%;
    }
    &__input {
      width: 100%;
      flex: 1;
      margin-bottom: 75px;
    }
    &__title {
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
    &__text {
      display: none;
    }
    &__social {
      width: 100%;
    }
  }
}
</style>
