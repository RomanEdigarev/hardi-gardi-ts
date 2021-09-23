import IconWithCount from "./IconWithCount.vue";
import { number } from "@storybook/addon-knobs";
import { FavoriteIcon, ShopIcon } from "@/shared/ui/icons";

export default {
  title: "features/IconWithCount",
  component: IconWithCount,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Favorite = (args) => ({
  components: {
    IconWithCount,
    FavoriteIcon,
  },
  props: {
    count: {
      default: number("count", 0),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="padding-left: 25%">
      <IconWithCount :count="$props.count">
        <template v-slot:svg-icon> 
          <FavoriteIcon/>
        </template>
      </IconWithCount>
    </div>
  `,
});

export const Shop = (args) => ({
  components: {
    IconWithCount,
    ShopIcon,
  },
  props: {
    count: {
      default: number("count", 0),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="padding-left: 25%">
      <IconWithCount :count="$props.count">
        <template v-slot:svg-icon> 
          <ShopIcon/>
        </template>
      </IconWithCount>
    </div>
  `,
});
