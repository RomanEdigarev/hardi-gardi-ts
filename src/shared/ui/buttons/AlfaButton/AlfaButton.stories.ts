import { action } from "@storybook/addon-actions";
import AlfaButton from "./AlfaButton.vue";
import {Story} from "@storybook/vue3";

export default {
  title: "ui/buttons/AlfaButton",
  component: AlfaButton,
  argTypes: {
    text: {
      control: {
        type: "text",
      },
    },
  },
};

type Props = {
  styling: string,
  isPending: boolean,
  text: string
}

const Template : Story<Props> = (args ) => ({
  components: {
    AlfaButton,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 224px; height: 62px;">
     <AlfaButton v-bind="args" @click="click"/>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

export const Primary = Template.bind({});
Primary.args = {
  styling: "primary",
  isPending: false,
  text: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  styling: "secondary",
  isPending: false,
  text: "button",
};

export const Text = Template.bind({});
Text.args = {
  styling: "onlyText",
  isPending: false,
  text: "button",
};
