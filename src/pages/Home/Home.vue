<template>
  <div class="home">
    <section class="home__prolog-container">
      <Prolog />
    </section>
    <section class="home__bestsellers-container">
      <SectionBestsellers :products="[product, product]" />
    </section>
    <section class="home__new-games-container">
      <SectionNewGames :products="[product, product]" />
    </section>
    <section class="home__promotion-container">
      <PromotionSection :products="[product, product]" />
    </section>
    <section class="home__sales-container">
      <SectionSales :products="[product, product, product, product]" />
    </section>
    <section class="home__sets-container">
      <SectionSets :products="[product, product]" />
    </section>
    <section class="home__category-cards-container">
      <div class="home__category-cards-container__card-container">
        <CategoryCard title="Наша история" bg-color="#FADDEA">
          <template v-slot:svg-container>
            <svg
              width="206"
              height="108"
              viewBox="0 0 206 108"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M145.529 16.8342C125.175 55.8337 78.0813 52.7258 57.4279 16.4332C37.0738 -19.2578 -15.707 16.1324 4.54725 51.7232C49.6455 130.925 160.894 124.409 202.101 45.5073C221.258 9.11453 164.586 -19.5586 145.529 16.8342Z"
                fill="#F27F94"
              />
            </svg>
          </template>
        </CategoryCard>
      </div>

      <div class="home__category-cards-container__card-container">
        <CategoryCard title="Философия" bg-color="#C1CEE9">
          <template v-slot:svg-container>
            <svg
              width="258"
              height="91"
              viewBox="0 0 258 91"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M55.9915 56.7107C50.1975 64.3728 52.495 61.288 54.1933 59.3974C57.0903 56.2131 48.3993 63.0792 51.1964 61.5865C53.0944 60.5915 54.8926 59.3974 56.8905 58.5018C54.493 59.4969 52.0955 60.492 49.6979 61.487C52.7947 60.2929 55.8916 59.4969 59.1882 58.9994C56.4909 59.3974 53.8936 59.6959 51.1964 60.0939C54.9925 59.5964 58.6887 59.5964 62.3849 59.9944C59.6877 59.5964 57.0903 59.2979 54.3931 58.8998C57.5898 59.3974 60.6867 60.1934 63.7835 61.3875C61.3859 60.3925 58.9884 59.3974 56.5909 58.4023C57.4899 58.8003 60.8864 61.288 61.6856 61.1885C61.1861 61.288 55.8916 56.0141 58.2891 58.7008C58.9884 59.4969 59.7876 60.2929 60.4869 60.9895C64.3829 64.8703 58.4889 58.5018 58.5888 58.5018C58.8885 58.5018 60.2871 60.89 60.4869 61.089C61.5857 62.6811 62.6846 64.2732 63.8834 65.7659C69.1779 72.8309 74.1728 78.7018 81.765 83.5777C89.0575 88.2546 97.8485 90.5432 106.44 90.9412C119.826 91.6378 133.112 86.0654 143.601 78.2043C147.098 75.6171 150.494 72.9304 153.891 70.3432C154.89 69.5471 155.889 68.7511 156.788 68.0545C159.585 65.7658 150.794 72.3333 154.79 69.5471C158.286 67.0594 161.883 64.9698 165.779 63.1787C163.381 64.1737 160.984 65.1688 158.586 66.1639C164.18 63.8752 169.974 62.2831 175.968 61.487C173.271 61.8851 170.674 62.1836 167.976 62.5816C174.57 61.7856 181.163 61.7856 187.756 62.6811C185.059 62.2831 182.461 61.9846 179.764 61.5865C186.258 62.4821 192.551 64.0742 198.645 66.5619C196.247 65.5668 193.85 64.5718 191.452 63.5767C195.548 65.3678 199.144 67.6565 202.94 69.9452C205.438 71.4378 196.747 64.6713 200.243 67.8555C200.942 68.5521 201.742 69.1491 202.441 69.8457C204.039 71.3383 205.438 73.0299 206.836 74.7215C211.232 80.294 221.222 83.4782 228.015 83.4782C235.407 83.4782 244.098 80.1945 249.193 74.7215C254.388 69.0496 258.284 61.5865 257.984 53.6259C257.584 45.1678 254.388 39.0978 249.193 32.5303C232.41 11.3352 201.542 1.48401 175.169 2.37958C159.985 2.87711 145.499 6.35987 131.913 13.3254C125.22 16.7086 119.426 21.7835 113.632 26.3609C112.433 27.2565 111.235 28.152 110.136 29.1471C117.129 23.2762 113.233 26.7589 111.435 28.0525C108.637 30.0427 105.74 31.7343 102.644 33.2269C105.041 32.2318 107.439 31.2367 109.836 30.2417C107.638 31.1372 105.541 31.8338 103.243 32.2318C105.94 31.8338 108.537 31.5353 111.235 31.1372C109.337 31.3363 107.538 31.4358 105.64 31.2367C108.338 31.6348 110.935 31.9333 113.632 32.3313C111.734 32.0328 109.936 31.6348 108.238 30.9382C110.635 31.9333 113.033 32.9284 115.43 33.9235C114.531 33.5254 113.532 32.7294 112.633 32.4309C111.335 31.6348 111.934 32.0328 114.132 33.6249C116.429 35.5156 116.829 35.7146 115.231 34.3215C114.132 33.1274 109.836 28.0525 113.432 32.6299C117.029 37.2072 112.933 31.7343 112.034 30.4407C109.536 26.9579 106.939 23.5747 104.242 20.2909C96.7496 11.2357 85.4612 4.56874 73.973 1.98154C62.1851 -0.705159 49.4981 -0.804668 37.7102 2.57859C23.325 6.65839 12.8358 14.818 4.04487 26.5599C-0.350616 32.3313 -0.850102 42.8791 1.04795 49.5461C2.946 56.5117 8.34047 63.9747 14.8338 67.358C21.8266 71.0397 30.218 72.8309 37.91 70.3432C46.0017 67.955 51.0965 63.2782 55.9915 56.7107Z"
                fill="#5F73AA"
              />
            </svg>
          </template>
        </CategoryCard>
      </div>
      <div class="home__category-cards-container__card-container">
        <CategoryCard :title="`Продукция \nи качество`" bg-color="#FFE2A0">
          <template v-slot:svg-container>
            <svg
              width="189"
              height="151"
              viewBox="0 0 189 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.30984 85.7615C22.2722 110.616 45.5205 165.416 84.6337 147.449C102.294 139.363 115.964 119.4 129.135 105.625C146.197 87.7579 163.359 69.8905 180.421 52.0232C207.361 23.8747 164.656 -18.947 137.616 9.20154C122.749 24.6732 107.982 40.145 93.1148 55.6166C86.2301 62.8035 79.4452 69.8905 72.5605 77.0774C69.168 80.6708 65.6758 84.2642 62.2833 87.7579C53.7024 95.7432 53.0039 97.0409 60.0882 91.6507C67.8709 92.6489 75.6536 93.6471 83.3366 94.7451C75.3543 90.1535 62.882 63.3026 57.2944 55.2174C35.6425 23.2758 -16.7412 53.5205 5.30984 85.7615Z"
                fill="#FFC124"
              />
            </svg>
          </template>
        </CategoryCard>
      </div>
    </section>
  </div>

  <img
    class="app__header-bg"
    :src="require('/public/images/header-bg.svg')"
    alt=""
  />
  <img
    class="app__header-image"
    :src="require('/public/images/header-image.png')"
    alt=""
  />
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

import {
  Prolog,
  SectionBestsellers,
  SectionNewGames,
  SectionSales,
  SectionSets,
  CategoryCard,
} from "./ui";
import { useProduct } from "@/entities/Products/Product/lib";
import { PromotionSection } from "@/widgets";
import { useStore } from "@/services/vuex";

export default defineComponent({
  name: "Home",
  components: {
    Prolog,
    SectionBestsellers,
    SectionNewGames,
    PromotionSection,
    SectionSales,
    SectionSets,
    CategoryCard,
  },
  setup() {
    const store = useStore();
    const { product } = useProduct();

    return {
      product,
      isPhone: computed(() => store.state.isPhone),
    };
  },
});
</script>

<style scoped lang="scss">
.home {
  &__prolog-container {
    width: 100%;
    height: 816px;
    margin-top: 757px;
    margin-bottom: 114px;
  }

  &__bestsellers-container {
    width: 100%;
    height: 600px;
    margin-bottom: 106px;
  }

  &__new-games-container {
    margin-bottom: 121px;
  }

  &__promotion-container {
    width: 100%;
    height: 600px;
    margin-bottom: 121px;
  }

  &__sales-container {
    max-width: 1195px;
    width: 100%;
    margin-bottom: 121px;
  }

  &__sets-container {
    max-width: 1195px;
    width: 100%;
    margin-bottom: 121px;
  }

  &__category-cards-container {
    width: 100%;
    height: 284px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 88px;

    &__card-container {
      max-width: 378px;
      flex: 0.4;
    }
  }
}

@media screen and (min-width: 738px) and (max-width: 1364px),
  (-webkit-min-device-pixel-ratio: 3) {
  .home {
    &__prolog-container {
      height: auto;
      margin-bottom: 236px;
    }
    &__new-games-container {
      margin-bottom: 241px;
    }
    &__sales-container {
      margin-bottom: 233px;
    }
    &__category-cards-container {
      gap: 30px;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 736px),
  (-webkit-min-device-pixel-ratio: 3) {
  .home {
    &__prolog-container {
      height: auto;
      margin-top: 427px;
      margin-bottom: 52px;
    }
    &__new-games-container {
      margin-bottom: 51px;
    }
    &__sets-container {
      margin-bottom: 51px;
    }
    &__sales-container {
      margin-bottom: 51px;
    }

    &__category-cards-container {
      display: grid;
      width: 100%;
      height: auto;
      grid-template-columns: 1fr;
      grid-auto-rows: 158px;
      gap: 18px;
      margin-bottom: 88px;

      &__card-container {
        max-width: 100%;
      }
    }
  }
}
</style>
