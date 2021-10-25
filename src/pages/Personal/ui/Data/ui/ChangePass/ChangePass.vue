<template>
  <div class="change-pass">
    <div ref="body" class="change-pass__body">
      <div class="change-pass__input">
        <VInput
          type="password"
          name="newPassword"
          id="newPassword"
          placeholder="Новый пароль"
        />
      </div>
      <div class="change-pass__input">
        <VInput
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Подтверждение пароля"
        />
      </div>
    </div>
    <div class="change-pass__footer">
      <button class="change-pass__footer__btn" @click="toggle">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.11837 13.1288L14.7162 1.53107C14.735 1.5254 14.7556 1.5195 14.7777 1.51351C14.9366 1.47046 15.1659 1.42565 15.4349 1.42193C15.9531 1.41479 16.6406 1.55583 17.3159 2.23112C17.9912 2.90641 18.1323 3.59395 18.1251 4.11213C18.1214 4.38118 18.0766 4.61045 18.0335 4.76938C18.0276 4.79148 18.0217 4.81202 18.016 4.8309L6.4182 16.4287L2.6684 16.8787L3.11837 13.1288Z"
            stroke="#D23C50"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M11.8896 2.94336L16.3792 7.43293"
            stroke="#D23C50"
            stroke-width="2"
          />
        </svg>

        <span>{{ isOpen ? "Не менять пароль" : "Сменить пароль" }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { VInput } from "@/shared/ui/inputs";
import * as yup from "yup";
import anime from "animejs";
import { useStore } from "@/services/vuex";
import { useField } from "vee-validate";
export default defineComponent({
  name: "ChangePass",
  components: { VInput },
  setup() {
    const store = useStore();
    const isMobile = computed(() => store.state.isMobile);
    const isPassword = yup.string().required("Обязательное поле");
    const isOpen = ref(false);
    const body = ref(null);
    useField("newPassword");
    useField("confirmPassword");

    const animation = (isOpen) => {
      if (isOpen) {
        anime
          .timeline({
            targets: body.value,
            maxHeight: [0, "1000px"],
            height: isMobile.value ? "166px" : "72px",
            duration: 600,
            easing: "easeOutCirc",
          })
          .add({
            targets: body.value,
            opacity: [0, 1],
            duration: 600,
            easing: "easeOutCirc",
          });
      } else {
        anime({
          targets: body.value,
          maxHeight: ["1000px", "0px"],
          height: [0],
          duration: 600,
          easing: "easeOutCirc",
        });
      }
    };
    const toggle = () => {
      isOpen.value = !isOpen.value;
      animation(isOpen.value);
    };

    return {
      isPassword,
      toggle,
      isOpen,
      body,
    };
  },
});
</script>

<style lang="scss" scoped>
.change-pass {
  width: 100%;
  max-width: 726px;
  &__body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    column-gap: 16px;
    margin-bottom: 18px;
    max-height: 0;
    transition: max-height 0.3s ease-in-out;
    overflow: hidden;
  }

  &__footer {
    &__btn {
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
      span {
        color: $clr-zeta;
      }
    }
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .change-pass {
    &__body {
      grid-template-columns: 1fr;
      row-gap: 30px;
    }
  }
}
</style>
