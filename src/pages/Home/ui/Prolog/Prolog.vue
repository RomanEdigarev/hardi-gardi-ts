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
      <div class="prolog__cards__row">
        <div
          v-for="(card, index) in firstRow"
          class="prolog__card"
          :key="card.name"
        >
          <PrologCard
              @click="$router.push(`/catalog/${card.id}`)"
            :section-id="card.id"
            :color="card.color"
            :title="card.name"
          />
        </div>
      </div>
      <transition appear @enter="enterElement" @leave="leaveElement">
        <div v-if="isOpen" class="prolog__cards__row">
          <div
              v-for="(card, index) in secondRow"
              class="prolog__card"
              :key="card.name"
          >
            <PrologCard
                @click="$router.push(`/catalog/${card.id}`)"
                :section-id="card.id"
                :color="card.color"
                :title="card.name"
            />
          </div>
        </div>
      </transition>
    </div>
    <div class="prolog__button">
      <BetaButton styling="beta-beta-btn" v-if="!isOpen" @click="isOpen = !isOpen">
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
import {defineComponent, ref} from "vue";
import anime from "animejs";
import {useStore} from "@/services/vuex";

export default defineComponent({
  name: "Prolog",
  components: {
    PrologCard,
    BetaButton,
    PlusIcon,
  },
  setup() {
    const store = useStore()
    const { rows } = useCards();
    const [firstRow, secondRow] = rows;
    const isOpen = ref(false)

    const setSectionFilter = async (value) => {
      store.commit("products/addCurrentFilter", { name: "section", value });
      await store.dispatch("products/setProductsByPage", 1);
    };


    const enterElement = (el, done) => {
      anime({
        targets: el,
        opacity: [0, 1],
        duration: 300,
        easing: "linear",
        complete: done,
      });
    };
    const leaveElement = (el, done) => {
      anime({
        targets: el,
        opacity: [1, 0],
        easing: "linear",
        duration: 300,
        complete: done,
      });
    };
    return {
      firstRow,
      secondRow,
      rows,
      isOpen,
      enterElement,
      leaveElement,
      setSectionFilter
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
    margin-bottom: 108px;
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
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 38px;
    margin-bottom: 50px;
    &__row {
      display: flex;
      justify-content: space-between;
    }
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

@media screen and (min-width: 738px) and (max-width: 1200px),
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
      &__row {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        margin-bottom: 40px;
      }
    }
    &__card {
      height: 301px;
      flex-shrink: 0;
    }
  }
}

@media screen and (min-width: 320px) and (max-width: 737px),
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
    &__text {
      p {
        font-size: 16px;
      }
    }
    &__link {
      font-size: 14px;
    }
    &__title {
      span {
        font-size: 36px;
        line-height: 1.11;
        /* or 111% */
      }
    }
    &__cards {
      &__row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        grid-auto-rows: minmax(219px, 1fr);
        gap: 20px;
        margin-bottom: 20px;
      }
    }
    &__card {
      height: 100%;
    }
    &__button {
      width: 52px;
      height: 52px;
    }
    &__image {
      width: 41vw;
    }
  }
}
</style>