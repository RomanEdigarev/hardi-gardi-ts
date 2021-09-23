import BurgerMenu from "./BurgerMenu.vue";

export default {
  title: "widgets/BurgerMenu",
  component: BurgerMenu,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const burgerMenu = (args) => ({
  components: {
    BurgerMenu,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 100%; height: 432px; background-color: white;">
     <BurgerMenu/>
    </div>
  `,
});
