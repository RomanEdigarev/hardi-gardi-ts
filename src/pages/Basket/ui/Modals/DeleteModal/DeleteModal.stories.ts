import DeleteModal from "./DeleteModal.vue";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "pages/Basket/ui/modals/DeleteModal",
  component: {
    DeleteModal,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const deleteModal = () => ({
  components: {
    DeleteModal,
  },
  setup() {},
  template: `
      <div style="width:582px; height: auto;">
        <DeleteModal />
      </div>
    `,
});
