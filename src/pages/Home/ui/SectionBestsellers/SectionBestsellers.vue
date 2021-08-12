<template>
  <div class="bestsellers">
    <BlockWithSlider :products="products" title="Наши Бестселлеры">
      <template v-slot:image-bg-container>
        <svg
          width="205"
          height="44"
          viewBox="0 0 205 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6999 1.14965C29.3999 4.14965 41.4999 6.34965 56.1999 7.94965C70.7999 9.54965 85.9999 10.4496 101.7 10.5496C117.4 10.6496 132.7 10.0496 147.6 8.74965C162.5 7.44965 175.3 5.24965 186 2.34965C191.1 1.04965 195.2 1.64965 198.4 4.14965C201.6 6.64965 203.6 9.94965 204.5 13.9496C205.4 17.9496 205 21.9496 203.4 25.8496C201.7 29.7496 198.5 32.3497 193.7 33.6497C181.2 36.8497 167 39.2497 151.1 40.8497C135.2 42.4496 118.9 43.1496 102.4 43.0496C85.7999 42.9496 69.5999 41.9496 53.6999 40.2496C37.7999 38.5496 23.6999 35.8497 11.4999 32.4496C6.69987 30.8496 3.39987 28.0496 1.79987 24.2496C0.0998716 20.3496 -0.200128 16.4496 0.799872 12.5496C1.79987 8.64965 3.99987 5.44965 7.49987 2.94965C10.6999 0.449649 14.8999 -0.150351 19.6999 1.14965Z"
            fill="#FCEEF4"
          />
        </svg>
      </template>
      <template v-slot:title-bg-container>
        <svg
          width="497"
          height="136"
          viewBox="0 0 497 136"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M54.1001 19.6L59.2001 19.4C88.9001 20.1 121.8 20.3 157.1 20C224.5 19.4 293.2 15.8 354.1 9.50001C383.2 6.50001 409.2 3.40001 431.5 0.400007L433.9 0.200007C448.9 -0.599993 462.3 2.90001 473.8 10.7C483.4 17.2 495.2 30 496.5 53.6C497.2 66.4 493.9 78.6 486.6 90C480.7 99.2 469.1 110.9 447.5 114.4L446.7 114.5C416.9 118.5 386.8 122 357.3 124.8C327.5 127.6 296.9 129.9 266.2 131.6C200.5 135.2 130.1 136.2 57.0001 134.6C33.7001 134.6 20.4001 123.7 13.3001 114.6C4.7001 103.5 0.300105 90.6 0.400105 77.2C0.700105 64 4.9001 51.8 13.0001 40.9C19.8001 31.8 32.4001 20.8 54.1001 19.6Z"
            fill="#FFEDC6"
          />
        </svg>
      </template>
    </BlockWithSlider>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { BlockWithSlider } from "@/widgets";
import { Product } from "@/entities/Product/model";

export default defineComponent({
  name: "SectionBestsellers",
  components: {
    BlockWithSlider,
  },
  props: {
    products: {
      type: Object as PropType<Product[]>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped></style>
