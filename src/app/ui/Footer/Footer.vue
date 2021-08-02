<template>
  <div class="footer">
    <div class="footer__wrapper">
      <div class="footer__content-container">
        <div class="footer__item catalog">
          <div class="footer__item__title">Каталог</div>
          <div class="footer__item__links">
            <a href="#" class="footer__item__link">Наборы со скидкой</a>
            <a href="#" class="footer__item__link">Игровые домики</a>
            <a href="#" class="footer__item__link small">Магнитные игры</a>
            <a href="#" class="footer__item__link small">Набор магнитов</a>
            <a href="#" class="footer__item__link">Рисуй-стирай</a>
            <a href="#" class="footer__item__link">Пазлы</a>
            <a href="#" class="footer__item__link small">Макси пазлы</a>
            <br />
            <a href="#" class="footer__item__link">Игры с бумагой</a>
            <a href="#" class="footer__item__link small">Книжки-вырезалки</a>
            <a href="#" class="footer__item__link small">Апликации</a>
            <a href="#" class="footer__item__link small">Маски</a>
            <a href="#" class="footer__item__link small">Раскраски</a>
            <a href="#" class="footer__item__link">Деткие книги</a>
            <a href="#" class="footer__item__link">Игры бродилки</a>
          </div>
        </div>
        <div class="footer__item help">
          <div class="footer__item__title">Помощь</div>
          <div class="footer__item__links">
            <a href="#" class="footer__item__link">Доставка и оплата</a>
            <a href="#" class="footer__item__link">О компании</a>
            <a href="#" class="footer__item__link">Сертификат</a>
            <a href="#" class="footer__item__link">Договор оферты</a>
            <a href="#" class="footer__item__link">Сотрудничество</a>
            <a href="#" class="footer__item__link">Благотварительность</a>
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
import {Subscription} from "@/features";
import { Copyright } from "@/shared/ui";
import {defineComponent} from "vue";
export default defineComponent({
  name: "Footer",
  components: {
    Subscription,
    Copyright,
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
    grid-template-columns: 1fr 1fr 1fr;
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
  font-size: 14px;
}
</style>
