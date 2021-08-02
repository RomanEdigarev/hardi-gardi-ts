import Input from "./Input.vue";

export default {
  title: "features/Subscription/Input",
  component: Input,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Template = (args) => ({
  components: {
    Input,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 400px; height: 56px;">
     <Input />
    </div>
  `,
});
