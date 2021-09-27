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
          {{ contacts.address }}
        </div>
      </div>
      <div class="info__body__item phone">
        <img class="info__body__item__icon" src="./assets/phone.svg" alt="" />
        <div>
          <a class="info__body__item__title" :href="contacts.phone">
            {{ contacts.phone }}
          </a>
          <div class="info__body__item__text">
            <div>{{ contacts.openingHours }}</div>
          </div>
        </div>
      </div>
      <div class="info__body__item">
        <img class="info__body__item__icon" src="./assets/mail.svg" alt="" />
        <div class="info__body__item__title">{{ contacts.mail }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Contacts } from "@/entities/Shop/Contacts/model";

export default defineComponent({
  name: "Info",
  props: {
    contacts: {
      type: Object as PropType<Contacts>,
      required: true,
    },
  },
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
@media screen and (max-width: 376px) {
  .info {
    max-width: 100%;
  }
}
</style>
