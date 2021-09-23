import Location from "./Location.vue";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "widgets/Location",
  component: Location,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const location = (args) => ({
  components: {
    Location,
  },
  props: {
    city: {
      default: text("city", "Санкт-Петербург"),
    },
  },
  template: `
    <div style="width: 542px; height: 100px; background-color: white; padding: 24px 0 ">
     <Location :city="$props.city"/>
    </div>
  `,
  methods: {},
});
