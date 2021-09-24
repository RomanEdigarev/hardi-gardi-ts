<template>
  <div class="details">
    <div class="details__header">
      <div class="details__header__title">Детали заказа</div>
    </div>
    <div class="details__body">
      <div class="details__body__info">
        <div class="details__body__info__row">
          <span>Статус</span>
          <span>Готов к выдаче</span>
        </div>
        <div class="details__body__info__row">
          <span>Номер заказа</span>
          <span>7344</span>
        </div>
        <div class="details__body__info__row">
          <span>Сумма</span>
          <span>3 800 ₽</span>
        </div>
        <div class="details__body__info__row">
          <span>Доставка</span>
          <span>150 ₽</span>
        </div>
      </div>
      <div class="details__body__delivery">
        <div class="details__body__delivery__title">
          <span><b>Доставка:</b></span> <span><b>Самовывоз</b></span>
        </div>
        <div class="details__body__delivery__text">Пункт выдачи СДЭК</div>
        <div class="details__body__delivery__text">
          г. Санкт-Петербург, Купчинская ул. 1/5 лит. А
        </div>
        <div class="details__body__delivery__row track-number">
          <span>Трек-номер</span><span>29358769048</span>
        </div>
        <div class="details__body__delivery__row">
          <span><b>Оплата: Картой</b></span>
          <span>Оплачено</span>
        </div>
      </div>
    </div>
    <div class="details__footer">
      <div class="details__footer__btn">
        <AlfaButton text="Повторить" />
      </div>
      <button v-if="!isPayment" class="details__footer__cancel">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8049 9.70262L10.805 9.70261L10.804 9.70169L7.81653 6.67914L7.81629 6.6789L7.15122 6.01485L10.804 2.32843C10.8819 2.2498 10.9458 2.16181 10.9861 2.06419C11.0254 1.96888 11.0494 1.86466 11.0494 1.7594C11.0494 1.65012 11.0341 1.54453 10.9854 1.44552C10.9467 1.35207 10.8916 1.25622 10.8189 1.18285L10.819 1.1828L10.817 1.18103C10.7402 1.11131 10.6535 1.04716 10.5569 1.00654C10.4597 0.96565 10.3483 0.95 10.247 0.95C10.1423 0.95 10.0392 0.974365 9.93832 1.01354L9.93832 1.01352L9.93704 1.01406C9.84043 1.05468 9.75318 1.11903 9.68249 1.19037L5.46569 5.44601C5.39345 5.51892 5.33792 5.60734 5.29854 5.70272L5.29852 5.70272L5.29804 5.704C5.25925 5.80577 5.23516 5.90965 5.23516 6.01504C5.23516 6.1203 5.25919 6.22452 5.29854 6.31983C5.33792 6.41522 5.39345 6.50364 5.46569 6.57655L9.68249 10.8322L9.68248 10.8322L9.68346 10.8331C9.83514 10.9782 10.0341 11.05 10.2395 11.05C10.4473 11.05 10.6462 10.9614 10.7891 10.8171C10.9395 10.6653 11.0194 10.4727 11.0196 10.2641C11.0274 10.0549 10.9475 9.85444 10.8049 9.70262Z"
            fill="#D23C50"
            stroke="#D23C50"
            stroke-width="0.1"
          />
          <path
            d="M1.19506 2.29738L1.19505 2.29739L1.19595 2.29831L4.18347 5.32086L4.18371 5.3211L4.84878 5.98515L1.196 9.67157C1.11809 9.75019 1.05425 9.83819 1.01394 9.93581C0.974591 10.0311 0.950557 10.1353 0.950557 10.2406C0.950557 10.3499 0.96592 10.4555 1.01459 10.5545C1.05334 10.6479 1.10839 10.7438 1.1811 10.8171L1.18105 10.8172L1.18299 10.819C1.25976 10.8887 1.3465 10.9528 1.44309 10.9935C1.54033 11.0343 1.65165 11.05 1.75303 11.05C1.85766 11.05 1.96075 11.0256 2.06168 10.9865L2.06168 10.9865L2.06296 10.9859C2.15957 10.9453 2.24682 10.881 2.3175 10.8096L6.53431 6.55399C6.60655 6.48108 6.66208 6.39266 6.70146 6.29728L6.70148 6.29728L6.70196 6.296C6.74075 6.19423 6.76484 6.09035 6.76484 5.98496C6.76484 5.8797 6.74081 5.77548 6.70146 5.68017C6.66208 5.58478 6.60655 5.49636 6.53431 5.42345L2.31751 1.16781L2.31752 1.1678L2.31654 1.16687C2.16486 1.02185 1.96587 0.949999 1.76048 0.949999C1.55267 0.949999 1.35384 1.03859 1.2109 1.18285C1.06047 1.33467 0.980601 1.52734 0.980359 1.73589C0.972649 1.94514 1.05254 2.14556 1.19506 2.29738Z"
            fill="#D23C50"
            stroke="#D23C50"
            stroke-width="0.1"
          />
        </svg>
        <span>Оменить заказ</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AlfaButton } from "@/shared/ui/buttons";
export default defineComponent({
  name: "Details",
  components: {
    AlfaButton,
  },
  props: {
    isPayment: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.details {
  width: 100%;
  max-width: 378px;
  background: $clr-kappa;
  border-radius: 25px;
  padding: 36px;
  color: $clr-phi;

  // *** Header *** //
  &__header {
    margin-bottom: 22px;
    &__title {
      font-weight: $bold;
      font-size: 28px;
      line-height: 34px;
    }
  }
  // *** Header END *** //

  // *** Body *** //
  &__body {
    margin-bottom: 24px;
    &__info {
      padding-bottom: 22px;
      margin-bottom: 22px;
      border-bottom: 1px solid #ffffff;
      &__row {
        margin-bottom: 8px;
        display: flex;
        justify-content: space-between;
        span {
          font-size: 15px;
          line-height: 1.6;
          display: inline-block;
        }
      }
    }
    &__delivery {
      &__title {
        margin-bottom: 5px;
      }
      &__text {
        line-height: 1.6;
      }
      &__row {
        margin-top: 5px;
        margin-bottom: 12px;
        display: flex;
        justify-content: space-between;
        span {
          display: inline-block;
        }
      }
    }
  }
  // *** Body END *** //

  // *** Footer *** //
  &__footer {
    &__btn {
      width: 306px;
      margin-bottom: 24px;
    }
    &__cancel {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      svg {
        margin-right: 12px;
      }
      span {
        line-height: 1.6;
        color: $clr-zeta;
      }
    }
  }
  // *** Footer END *** //

  // *** Other  *** //
  .track-number {
    span:nth-child(2) {
      text-decoration-line: underline;
      color: $clr-nu;
    }
  }
  // *** Other END *** //
}

@media screen and (max-width: 768px) {
  .details {
    max-width: 220px;
    padding: 30px 20px;

    // *** Header *** //
    &__header {
      &__title {
        font-size: 21px;
        line-height: 26px;
      }
    }
    // *** Header END *** //

    // *** Body *** //
    &__body {
      &__info {
        padding-bottom: 20px;
        margin-bottom: 20px;
        &__row {
          flex-direction: column;
          span {
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
      &__delivery {
        &__title {
          font-size: 14px;
          line-height: 17px;
        }
        &__text {
          font-size: 12px;
          line-height: 15px;
          margin-bottom: 15px;
        }
        &__row {
          font-size: 12px;
          line-height: 15px;
          flex-direction: column;
        }
      }
    }
    // *** Body END *** //

    // *** Footer *** //
    &__footer {
      &__btn {
        width: 180px;
      }
    }
    // *** Footer END *** //
  }
}

@media screen and (max-width: 376px) {
  .details {
    max-width: 310px;
    &__body {
      &__info {
        &__row {
          flex-direction: row;
          span {
            font-size: 12px;
            line-height: 15px;
          }
        }
      }
      &__delivery {
        &__row {
          flex-direction: row;
        }
      }
    }
    &__footer__btn {
      width: 100%;
    }
  }
}
</style>
