import SelfObtainingItem from "./SelfObtainingItem.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "features/Obtaining/SelfObtainingItem",
  component: {
    SelfObtainingItem,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const self = () => ({
  components: {
    SelfObtainingItem,
  },
  template: `
      <div style="width:721px; height: auto; background-color: white;">
        <SelfObtainingItem name="self" title="Пункт выдачи СДЭК" id="sdek"/>
      </div>
    `,
});
