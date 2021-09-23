import "../src/shared/style/_style.scss";

const customViewports = {
  kindleFire2: {
    name: "768px",
    styles: {
      width: "768px",
      height: "963px",
    },
  },
  kindleFireHD: {
    name: "375px",
    styles: {
      width: "375px",
      height: "801px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: customViewports,
  },
};
