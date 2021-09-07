import Contacts from "./Contacts.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "pages/Ordering/ui/Contacts",
  component: {
    Contacts,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const contacts = () => ({
  components: {
    Contacts,
  },
  template: `
      <div style="width:786px; height: auto; background-color: white;">
      <Contacts />
      </div>
    `,
});
