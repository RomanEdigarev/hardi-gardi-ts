<template>
  <div class="footer">
    <div class="footer__wrapper">
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
          <div class="footer__item__title">Контакты</div>
          <div class="footer__item__links">
            <span class="footer__item__link"
              >Санкт-Петербург<br />
              Беловодский пер. 5</span
            >
            <a href="#" class="footer__item__link">info@khardigardi.ru</a>
            <span class="footer__item__link phone">+7 921 961 14 41</span>
            <span class="footer__item__link working"
              >Пн-Пт: с 10.00 до 20.00 <br />
              Сб-Вс: с 11.00 до 18.00</span
            >
          </div>
        </div>

        <div class="footer__subscription"><Subscription /></div>
      </div>
      <div class="footer__copyright">
        <Copyright />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Subscription } from "@/features";
import { Copyright } from "@/shared/ui";
import { defineComponent } from "vue";
import { useFooterCatalog, useFooterMenu } from "@/app/ui/Footer/lib";
export default defineComponent({
  name: "Footer",
  components: {
    Subscription,
    Copyright,
  },
  setup() {
    const footerCatalog = useFooterCatalog();
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
    return {
      footerMenu: useFooterMenu(),
      footerCatalog,
      leftLinks,
      rightLinks,
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
    grid-template-columns: 1fr 0.5fr 1fr;
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
}

.catalog {
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
  color: $clr-alpha-zeta;
}

.working {
  margin-top: 28px;
}

.small {
  display: block;
  font-size: 14px;
}

@media screen and (min-width: 1367px) and (max-width: 1919px) {
  .footer {
    &__wrapper {
      padding: 0 10vw;
    }
    &__container {
      max-width: none;
      min-width: 80vw;
    }
  }
}
@media screen and (max-width: 1366px) {
  .footer {
    &__wrapper {
      padding: 0 86px;
    }
  }
}
@media screen and (min-width: 769px) and (max-width: 1365px) {
  .footer {
    &__wrapper {
      padding: 0 4vw;
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    &__wrapper {
      padding: 0 24px;
    }

    &__content-container {
      grid-template-columns: 400px 1fr;
      row-gap: 41px;
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
