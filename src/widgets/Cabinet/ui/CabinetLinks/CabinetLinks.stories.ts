import CabinetLinks from "./CabinetLinks.vue";
import { boolean, text } from "@storybook/addon-knobs";

export default {
  title: "widgets/Cabinet/ui/CabinetLinks",
  component: CabinetLinks,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const cabinetLinks = (args) => ({
  components: {
    CabinetLinks,
  },
  template: `
    <div style="width: 149px; background-color: white">
     <CabinetLinks />
    </div>
  `,
});
