import ProfileIcon from "./ProfileIcon.vue";

export default {
  title: "src/ui/icons/Profile",
  component: ProfileIcon,
};

export const Icon = (args) => ({
  components: {
    ProfileIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <ProfileIcon v-bind="args"/>  
  `,
});
