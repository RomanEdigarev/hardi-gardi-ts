import MinusIcon from "./MinusIcon.vue";

export default {
  title: "src/ui/icons/Minus",
  component: MinusIcon,
};

export const Icon = () => ({
  components: {
    MinusIcon,
  },
  template: `
    <MinusIcon />  
  `,
});
