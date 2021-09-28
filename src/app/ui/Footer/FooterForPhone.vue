<template>
  <div class="footer-phone">
    <div class="footer-phone__header">
      <div class="footer-phone__header">
        <div class="footer-phone__header__title">
          <span>Помощь</span>
          <svg
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.20652 2L5.63044 5.36956L9 2"
              stroke="white"
              stroke-width="2.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="footer-phone__header__items">
          <router-link
            v-for="item in footerMenu"
            :to="item.link"
            class="footer-phone__header__items__item"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </div>
    <div class="footer-phone__body">
      <div class="footer-phone__body__contacts">
        <div class="footer-phone__body__contacts__title">Контакты</div>
        <div class="footer-phone__body__contacts__address">
          {{ contacts.address }}
        </div>
        <div class="footer-phone__body__contacts__mail">
          {{ contacts.mail }}
        </div>
      </div>
      <div class="footer-phone__body__phone">
        <div>
          <a :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
        </div>
        <p>
          Пн-Пт: с 10.00 до 20.00<br />
          Сб-Вс: с 11.00 до 18.00
        </p>
      </div>
      <div class="footer-phone__body__subscription">
        <Subscription :social="social" />
      </div>
      <div class="footer-phone__body__social"></div>
    </div>
    <div class="footer-phone__footer">
      <div class="footer-phone__footer__copyright">
        <Copyright />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from "vue";
import { FooterMenu } from "@/entities/Shop/Menu/model";
import { Contacts } from "@/entities/Shop/Contacts/model";
import { Subscription } from "@/features";
import { Social as SocialType } from "@/entities/Shop/Social/model";
import { Copyright } from "@/shared/ui";

export default defineComponent({
  name: "FooterForPhone",
  components: { Subscription, Copyright },
  props: {
    footerMenu: {
      type: Object as PropType<FooterMenu>,
      required: true,
    },
    contacts: {
      type: Object as PropType<Contacts>,
      required: true,
    },
    social: {
      type: Object as PropType<SocialType>,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      console.log(props);
    });
  },
});
</script>

<style lang="scss" scoped>
.footer-phone {
  padding: 18px;
  width: 100%;
  background-color: transparent;
  color: white;
  // *** Header *** //
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 12px;
    &__title {
      display: flex;
      align-items: center;
      cursor: pointer;
      margin-bottom: 12px;
      span {
        color: white;
        margin-right: 6px;
        font-weight: $bold;
        font-size: 16px;
        line-height: 20px;
      }
    }
    &__items {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      &__item {
        font-size: 16px;
        line-height: 1.5;
        color: #ffffff;
      }
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    &__contacts {
      margin: 0 auto;
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 250px;
      text-align: center;
      margin-bottom: 28px;
      &__title {
        color: white;
        font-weight: $bold;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 12px;
      }
      &__address {
        color: white;
        font-size: 16px;
        line-height: 1.5;
      }
      &__mail {
      }
    }
    &__phone {
      font-weight: $bold;
      font-size: 20px;
      line-height: 1.2;
      text-align: center;
      margin-bottom: 42px;
      & > div:first-child {
        margin-bottom: 8px;
      }
      p {
        font-weight: $regular;
        font-size: 16px;
        line-height: 1.5;
      }
    }
    &__input {
      display: flex;
      align-items: center;
      justify-content: center;
      &__title {
        font-weight: $bold;
        font-size: 16px;
        line-height: 20px;
        margin-bottom: 22px;
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
  }
  // *** Footer END *** //
}
</style>
