import InfoProductCard from "./InfoProductCard.vue";
import { boolean, withKnobs } from "@storybook/addon-knobs";


export default  {
    title: "features/InfoProductCard",
    component: {InfoProductCard},
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    decorators: [withKnobs],
}

export const infoProductCard = () => ({
    components: {
        InfoProductCard
    },
    template: `
      <div style="width: 582px; height: 390px; background: transparent">
        <InfoProductCard/>
      </div>
    `
})