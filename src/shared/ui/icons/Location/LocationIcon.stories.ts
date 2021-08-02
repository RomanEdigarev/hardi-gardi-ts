import LocationIcon from "./LocationIcon.vue";

export default {
  title: "src/ui/icons/Location",
  component: LocationIcon,
};

export const Icon = () => ({
  components: {
    LocationIcon,
  },
  template: `
    <LocationIcon />  
  `,
});
