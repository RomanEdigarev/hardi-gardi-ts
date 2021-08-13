import SliderPanel from "@/features/Slider/ui/SliderPanel.vue";
import { action } from "@storybook/addon-actions";

export default {
  title: "ui/Slider/SliderPanel",
  component: {
    SliderPanel,
  },
  argTypes: {
    count: {
      control: {
        type: "number",
      },
    },
  },
};

export const Panel = (args) => ({
  components: {
    SliderPanel,
  },
  setup() {
    return { args };
  },
  template: `
      <div style="width: 295px;">
        <SliderPanel v-bind="args" @prev-slide="prevSlide" @next-slide="nextSlide" @set-current-slide="setCurrentSlide"/>
      </div>
  `,
  methods: {
    prevSlide: action("prev-slide"),
    nextSlide: action("next-slide"),
    setCurrentSlide: action("set-current-slide"),
  },
});
Panel.args = {
  count: 4,
};
