import FacebookIcon from "./FacebookIcon.vue";
import InstagramIcon from "./InstagramIcon.vue";
import TikTokIcon from "./TikTokIcon.vue";
import VKIcon from "./VKIcon.vue";
import YouTubeIcon from "./YouTubeIcon.vue";

export default {
  title: "src/ui/icons/Social",
  component: FacebookIcon,
};

export const facebook = () => ({
  components: {
    FacebookIcon,
  },
  template: `
    <FacebookIcon/>  
  `,
});

export const instagram = () => ({
  components: {
    InstagramIcon,
  },
  template: `
    <InstagramIcon/>  
  `,
});

export const tikTok = () => ({
  components: {
    TikTokIcon,
  },
  template: `
    <TikTokIcon/>  
  `,
});

export const vk = () => ({
  components: {
    VKIcon,
  },
  template: `
    <VKIcon/>  
  `,
});

export const youTube = () => ({
  components: {
    YouTubeIcon,
  },
  template: `
    <YouTubeIcon/>  
  `,
});
