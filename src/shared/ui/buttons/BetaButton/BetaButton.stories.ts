import BetaButton from "./BetaButton.vue";
import { action } from "@storybook/addon-actions";
import {
  ArrowIcon,
  CloseIcon,
  DeleteIcon,
  FavoriteIcon,
  PlusIcon,
  SlideArrowIcon,
} from "../../icons";

export default {
  title: "ui/buttons/BetaButton",
  component: {
    BetaButton,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  argTypes: {
    styling: {
      control: {
        type: "text",
      },
    },
    topOffset: {
      control: {
        type: "text",
      },
    },
    leftOffset: {
      control: {
        type: "text",
      },
    },
    size: {
      control: {
        type: "number",
      },
    },
    isPending: {
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isConfirm: {
      control: {
        type: "boolean",
      },
    },
  },
};

export const Plus = (args) => ({
  components: {
    BetaButton,
    PlusIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 68px; height: 68px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <PlusIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

Plus.args = {
  isPending: false,
  styling: "beta-beta-btn",
};

export const Arrow = (args) => ({
  components: {
    BetaButton,
    ArrowIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 64px; height: 48px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <ArrowIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

Arrow.args = {
  isPending: false,
  styling: "beta-alfa-btn",
};

export const Close = (args) => ({
  components: {
    BetaButton,
    CloseIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 38px; height: 38px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <CloseIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

Close.args = {
  styling: "beta-gamma-btn",
};

export const Delete = (args) => ({
  components: {
    BetaButton,
    DeleteIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 38px; height: 38px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <DeleteIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

Delete.args = {
  styling: "beta-gamma-btn",
  isDisabled: false,
};

export const FavoriteSmall = (args) => ({
  components: {
    BetaButton,
    FavoriteIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 38px; height: 38px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <FavoriteIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

FavoriteSmall.args = {
  styling: "beta-gamma-btn",
  isDisabled: false,
};

export const SlideArrow = (args) => ({
  components: {
    BetaButton,
    SlideArrowIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 46px; height: 46px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <SlideArrowIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

SlideArrow.args = {
  styling: "beta-epsilon-btn",
  isDisabled: false,
  isActive: false,
};

export const SlideArrowTransparent = (args) => ({
  components: {
    BetaButton,
    SlideArrowIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 46px; height: 46px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
      <SlideArrowIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

SlideArrowTransparent.args = {
  styling: "beta-zeta-btn",
  isDisabled: false,
  isActive: false,
};

export const PlusAlfa = (args) => ({
  components: {
    BetaButton,
    PlusIcon,
  },
  setup() {
    return { args };
  },
  template: `
    <div style="width: 60px; height: 60px;">
    <BetaButton v-bind="args" @click="click" :styling="args.styling">
        <PlusIcon/>
    </BetaButton>
    </div>
  `,
  methods: {
    click: action("clicked"),
  },
});

PlusAlfa.args = {
  styling: "beta-delta-btn",
  isDisabled: false,
  isActive: false,
};
