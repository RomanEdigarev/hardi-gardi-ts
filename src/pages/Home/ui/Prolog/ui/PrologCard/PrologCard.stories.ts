import PrologCard from "./PrologCard.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Body/Prolog/PrologCard",
  component: {
    PrologCard,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const prologCard = () => ({
  components: {
    PrologCard,
  },
  props: {
    color: {
      default: text("color", "DFDFDF"),
    },
    title: {
      default: text("title", "Заголовок"),
    },
  },
  template: `
    <div style="width: 270px; height: 370px;">
      <PrologCard :color="$props.color"  :title="$props.title">
        <template v-slot:image>
          <img src="/images/cards/one.svg" alt="">
        </template>
      </PrologCard>
    </div>
    `,
});
