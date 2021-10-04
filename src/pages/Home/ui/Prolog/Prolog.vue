<template>
  <section class="prolog">
    <div class="prolog__image">
      <img :src="require('/public/images/prolog.svg')" alt="prolog-image" />
    </div>
    <div class="prolog__info">
      <div class="prolog__title">
        <span class="displayFont"
          >Развивайся<br />
          и играй<br />
          вместе с нами</span
        >
      </div>
      <div class="prolog__text">
        <p>
          <b>Харди Гарди —</b> детские развивающие игры для маленьких
          мечтателей. Мы доставляем волшебные посылки детям по всему миру.
        </p>
        <p>
          Наша продукция разработана и произведена креативной командой из
          Сант-Петербурга.
        </p>
        <div class="prolog__link">
          <a href="#">Подробнее о нас</a>
        </div>
      </div>
    </div>

    <div class="prolog__cards">
      <div
        v-for="(card, index) in cards"
        class="prolog__card"
        :key="card.title"
      >
        <PrologCard :color="card.color" :title="card.title">
          <template v-slot:image>
            <img
              :src="require(`/public/images/cards/${index}-card.svg`)"
              :alt="`${index}-card`"
            />
          </template>
        </PrologCard>
      </div>
    </div>
    <div class="prolog__button">
      <BetaButton styling="beta-beta-btn">
        <PlusIcon />
      </BetaButton>
    </div>
  </section>
</template>

<script lang="ts">
import PrologCard from "./ui/PrologCard/PrologCard.vue";
import { useCards } from "./lib/useCards";
import { BetaButton } from "@/shared/ui/buttons";
import { PlusIcon } from "@/shared/ui/icons";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Prolog",
  components: {
    PrologCard,
    BetaButton,
    PlusIcon,
  },
  setup() {
    const { cards } = useCards();
    return {
      cards,
    };
  },
});
</script>

<style lang="scss" scoped>
.prolog {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__info {
    display: flex;
    justify-content: space-between;
    padding: 0 7%;
    align-items: center;
  }

  &__title {
    flex: 0.5;
    color: $clr-nu;
  }

  &__text {
    flex: 0.45;
    color: $clr-phi;
    p {
      line-height: 1.5;
    }
  }

  &__link {
    margin-top: 20px;
    color: $clr-zeta;
    a {
      &:hover {
        text-shadow: 0 0 1px $clr-zeta;
      }
    }
  }

  &__cards {
    display: flex;
    justify-content: space-between;
  }

  &__card {
    flex: 0.23;
    height: 370px;

    &__content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__button {
    width: 68px;
    height: 68px;
    margin: 0 auto;
  }

  &__image {
    position: absolute;
    width: 236px;
    z-index: -1;
    top: -105px;
    left: 0;
  }
}

@media screen and (min-width: 738px) and (max-width: 1364px),
  (-webkit-min-device-pixel-ratio: 3) {
  .prolog {
    &__text {
      max-width: 514px;
    }
    &__info {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 60px;
    }
    &__cards {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 30px;
      margin-bottom: 40px;
    }
    &__card {
      height: 301px;
      flex-shrink: 0;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .prolog {
    padding: 0;
    &__info {
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-bottom: 60px;
      padding: 0;
    }
    &__title {
      span {
        font-size: 36px;
        line-height: 1.11;
        /* or 111% */
      }
    }
    &__cards {
      display: grid;
      grid-template-columns: 160px 160px;
      grid-template-rows: 219px;
      gap: 20px;
      margin-bottom: 20px;
    }
    &__card {
      height: 100%;
    }
  }
}
</style>
