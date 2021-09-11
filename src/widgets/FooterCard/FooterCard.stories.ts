import FooterCard from "./FooterCard.vue";
import { text } from "@storybook/addon-knobs";

export default {
  title: "widgets/FooterCard",
  component: FooterCard,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const footerCard = (args) => ({
  components: {
    FooterCard,
  },
  props: {
    bgString: {
      default: text("bgColor", "#fceef4"),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 1194px;height: 621px; background-color: white;">
     <FooterCard>
       <template v-slot:text>
         Подобно бренду и его продукции компания растет с каждым годом. Сегодня более 30 человек способствуют тому, чтобы детские глаза сияли радостью.
       </template>
     </FooterCard>
    </div>
  `,
  methods: {},
});
