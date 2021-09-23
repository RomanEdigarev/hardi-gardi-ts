<template>
  <div class="info">
    <div class="info__body">
      <div class="info__body__item">
        <img
          class="info__body__item__icon"
          src="./assets/location.svg"
          alt=""
        />
        <div class="info__body__item__title">
          Санкт-Петербург, Беловодский переулок 5
        </div>
      </div>
      <div class="info__body__item phone">
        <img class="info__body__item__icon" src="./assets/phone.svg" alt="" />
        <div>
          <a class="info__body__item__title" href="tel:+7 (921) 961-14-41">
            +7 (921) 961-14-41
          </a>
          <div class="info__body__item__text">
            <div>Пн-пт: с 10:00 до 20:00</div>
            <div>Сб-вс: с 11:00 до 18:00</div>
          </div>
        </div>
      </div>
      <div class="info__body__item">
        <img class="info__body__item__icon" src="./assets/mail.svg" alt="" />
        <div class="info__body__item__title">info@khardigardi.ru</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Info",
});
</script>

<style lang="scss" scoped>
.info {
  background: $clr-tau;
  border-radius: 25px;
  width: 100%;
  max-width: 438px;
  padding: 0 36px;
  color: $clr-phi;
  // *** Body *** //
  &__body {
    &__item {
      display: flex;
      padding: 29px 0;
      border-bottom: 1px solid $clr-theta;
      &__title {
        font-weight: $semi-bold;
        font-size: 20px;
        line-height: 1.5;
      }
      &__text {
        font-weight: $regular;
        font-size: 16px;
        line-height: 1.5;
      }
      &__icon {
        margin-right: 24px;
      }
    }
  }
  // *** Body END *** //

  // *** Other *** //
  // *** Other END *** //
  .phone {
    //flex-direction: column;
  }
}
@media screen and (max-width: 768px) {
  .info {
    max-width: 261px;
    padding: 0 20px;
    &__body {
      &__item {
        padding: 20px 0;
        &__title {
          display: inline-block;
          font-size: 12px;
          line-height: 15px;
          margin-bottom: 10px;
        }
        &__text {
          font-size: 10px;
          line-height: 16px;
        }
        &__icon {
          width: 15px;
        }
      }
    }
  }
}
</style>
