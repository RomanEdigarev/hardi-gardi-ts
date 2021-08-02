import Tooltip from "./Tooltip.vue";
import { number } from "@storybook/addon-knobs";

export default {
  title: "ui/Tooltip",
  component: Tooltip,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export const Template = (args) => ({
  components: {
    Tooltip,
  },
  props: {
    offset: {
      default: number("offset", 0),
    },
  },
  setup() {
    return { args };
  },
  template: `
    <div style="padding-left: 50px">
    <Tooltip :offset="offset">
      <template v-slot:reference>
        <div>
          <svg width="5" height="14" viewBox="0 0 5 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.72461" cy="1.75" r="1.75" fill="#D23C50"/>
            <circle cx="2.72461" cy="7" r="1.75" fill="#D23C50"/>
            <circle cx="2.72461" cy="12.25" r="1.75" fill="#D23C50"/>
          </svg>
        </div>
      </template>

      <template v-slot:content>
        <div class="links">
          <a class="link" href="/">Наша история</a>
          <a class="link" href="/">Философия</a>
          <a class="link" href="/">Продукция и качество</a>
          <a class="link" href="/">Сотрудничество</a>
          <a class="link" href="/">Контакты</a>
        </div>
      </template>
    </Tooltip>
    </div>

  `,
});
