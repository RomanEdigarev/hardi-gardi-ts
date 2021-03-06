<template>
  <div class="footer">
    <div v-if="!isOrderingPage" class="footer__wrapper">
      <div class="footer__content-container">
        <div class="footer__item catalog">
          <div class="footer__item__title">Каталог</div>
          <div class="footer__item__links">
            <div class="footer__item__link__left">
              <div v-for="item in leftLinks">
                <router-link :to="item.link" class="footer__item__link">
                  {{ item.name }}
                </router-link>
                <div v-if="item.sections.length > 0">
                  <router-link
                    v-for="footerSubsection in item.sections"
                    :to="footerSubsection.link"
                    class="footer__item__link small"
                  >
                    {{ footerSubsection.name }}
                  </router-link>
                </div>
              </div>
            </div>
            <div class="footer__item__link__right">
              <div v-for="item in rightLinks">
                <router-link :to="item.link" class="footer__item__link">
                  {{ item.name }}
                </router-link>
                <div v-if="item.sections.length > 0">
                  <router-link
                    v-for="footerSubsection in item.sections"
                    :to="footerSubsection.link"
                    class="footer__item__link small"
                  >
                    {{ footerSubsection.name }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__item help">
          <div class="footer__item__title">Помощь</div>
          <div class="footer__item__links">
            <router-link
              class="footer__item__link"
              v-for="footerItem in footerMenu"
              :to="footerItem.link"
            >
              {{ footerItem.name }}
            </router-link>
          </div>
        </div>

        <div class="footer__item contacts">
          <router-link to="/contacts" class="footer__item__title">Контакты</router-link>
          <div class="footer__item__links">
            <span class="footer__item__link"
              >Санкт-Петербург<br />
              Беловодский пер. 5</span
            >
            <a href="#" class="footer__item__link">info@khardigardi.ru</a>
            <a href="tel:+7 921 961 14 41" class="footer__item__link phone">
              +7 921 961 14 41
            </a>
            <span class="footer__item__link working"
              >Пн-Пт: с 10.00 до 20.00 <br />
              Сб-Вс: с 11.00 до 18.00</span
            >
          </div>
        </div>

        <div class="footer__subscription">
          <Subscription :social="social" />
        </div>
      </div>
      <div class="footer__copyright">
        <Copyright />
      </div>
    </div>
    <div v-else class="footer__is-ordering-page">
      © khardigardi.ru  2019<br>Развивающие игры для детей. Все права защищены
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from "@/features";
import { Copyright } from "@/shared/ui";
import {defineComponent, onMounted, PropType, ref, watchEffect} from "vue";
import { useFooterCatalog, useFooterMenu } from "@/app/ui/Footer/lib";
import { Social as SocialType } from "@/entities/Shop/Social/model";
import {useRoute} from "vue-router";
export default defineComponent({
  name: "Footer",
  components: {
    Subscription,
    Copyright,
  },
  props: {
    social: {
      type: Object as PropType<SocialType>,
      required: true,
    },
  },
  setup() {
    const footerCatalog = useFooterCatalog();
    const route = useRoute();
    const firstPartFooterLinks = footerCatalog.sections.slice(0, 4);
    const secondPartFooterLinks = footerCatalog.sections.slice(4);
    const leftLinks =
      firstPartFooterLinks.length > secondPartFooterLinks.length
        ? firstPartFooterLinks
        : secondPartFooterLinks;
    const rightLinks =
      firstPartFooterLinks.length < secondPartFooterLinks.length
        ? secondPartFooterLinks
        : firstPartFooterLinks;

    const isOrderingPage = ref(false);
    onMounted(() => {
      isOrderingPage.value = route.path === "/ordering";
    });

    watchEffect(() => {
      route.path === "/ordering" ? (isOrderingPage.value = true) : false;
    });
    return {
      footerMenu: useFooterMenu(),
      footerCatalog,
      leftLinks,
      rightLinks,
      isOrderingPage,
    };
  },
});
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  color: white;

  &__wrapper {
    padding: 0 19vw;
  }

  &__content-container {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1.6fr 0.5fr 1fr;
    justify-content: space-between;
  }

  .help {
    justify-self: center;
  }

  .contacts {
    justify-self: center;
  }

  &__item {
    max-height: 280px;

    &__title {
      font-size: 20px;
      font-weight: $bold;
      margin-bottom: 12px;
    }

    &__links {
      width: 100%;
      height: 100%;
      display: flex;
      font-size: 18px;
      flex-direction: column;
      line-height: 1.89;
      flex-wrap: wrap;
    }

    &__link {
      line-height: 1.89;
      &:hover {
        color: #c1cee9;
      }
    }
  }

  &__subscription {
    width: 100%;
    grid-column: 1 / 4;
  }

  &__copyright {
    width: 100%;
    margin-top: 56px;
  }

  &__is-ordering-page {
    font-size: 12px;
    color: #606060;
    padding: 40px 19vw;
  }
}

.catalog {
  max-width: 466px;
  max-height: 280px;
  margin-bottom: 48px;
  .footer__item__links {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.phone {
  font-size: 22px;
  margin-top: 12px;
  font-weight: $bold;
  cursor: pointer;
}

.working {
  margin-top: 28px;
}

.small {
  display: block;
  font-size: 14px;
}
.contacts {
  .footer__item__title {
    cursor: pointer;
  }
}

@media screen and (min-width: 1368px) and (max-width: 1919px) {
  .footer {
    &__wrapper {
      padding: 0 10vw;
    }
    &__content-container {
      width: 1194px;
      margin: 0 auto;
    }
    &__container {
      max-width: none;
      min-width: 80vw;
    }
  }
}
@media screen and (max-width: 1367px) {
  .footer {
    &__wrapper {
      padding: 0 86px;
    }
  }
}

@media screen and (max-width: 1368px) {
  .footer {
    &__wrapper {
      padding: 0 0;
    }
    &__content-container,
    &__copyright {
      max-width: 1191px;
      width: 95%;
      margin: 0 auto;
    }
  }
}

@media screen and (min-width: 738px) and (max-width: 1200px),
  (-webkit-min-device-pixel-ratio: 3) {
  .footer {
    &__wrapper {
      padding: 0 24px;
    }

    &__content-container {
      grid-template-columns: 400px 1fr;
      row-gap: 41px;
      width: 720px;
      margin: 0 auto;
    }

    &__subscription {
      grid-column: 1/2;
      grid-row: 2/3;
      flex-direction: column;
    }
    .contacts {
      grid-column: 2/3;
      grid-row: 2/3;
    }
    &__item {
      &__link {
        font-size: 16px;
        line-height: 34px;
      }
      &__title {
        font-size: 20px;
        line-height: 24px;
      }
    }
    .small {
      font-size: 14px;
      line-height: 34px;
    }
  }
}
</style>
