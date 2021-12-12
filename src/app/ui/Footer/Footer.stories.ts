import Footer from "./Footer.vue";
import FooterForPhone from "./FooterForPhone.vue";
import { FooterMenu } from "@/entities/Shop/Menu/model";
import { Contacts } from "@/entities/Shop/Contacts/model";
import { Social } from "@/entities/Shop/Social/model";

export default {
  title: "app/ui/Footer",
  component: Footer,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Template = (args) => ({
  components: {
    Footer,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="margin: 0 auto; width: 100%; max-width: 1193px">
     <Footer />
    </div>
  `,
});

export const footerForPhone = (args) => ({
  components: {
    FooterForPhone,
  },
  setup() {
    const footerMenu: FooterMenu = [
      {
        name: "Доставка и оплата",
        link: "/about/delivery.html",
      },
      {
        name: "О компании",
        link: "/about/about.html",
      },
      {
        name: "Сертификат",
        link: "/about/certificate.html",
      },
      {
        name: "Договор оферты",
        link: "/about/offer.html",
      },
      {
        name: "Сотрудничество",
        link: "/about/cooperation.html",
      },
      {
        name: "Благотворительность",
        link: "/about/sponsor.html",
      },
    ];
    const contacts: Contacts = {
      address: "Санкт-Петербург, Большой Сампсониевский проспект дом 60 лит М",
      mail: "info@khardigardi.ru",
      phone: "+79213929790",
      openingHours: "10:00 до 17:00",
    };
    const social: Social = [
      {
        name: "VK",
        url: "https://vk.com/",
      },
      {
        name: "FB",
        url: "https://facebook.com",
      },
    ];
    return { args, footerMenu, contacts, social };
  },
  template: `
    <div style="margin: 0 auto; width: 375px;">
    <FooterForPhone :footer-menu="footerMenu" :contacts="contacts" :social="social"/>
    </div>
  `,
});
