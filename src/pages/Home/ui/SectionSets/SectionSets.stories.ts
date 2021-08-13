import SectionSets from "./SectionSets.vue";
import {withKnobs} from "@storybook/addon-knobs";
import {useProduct} from "@/entities/Product/lib";

export default {
    title: "pages/Home/ui/SectionSets",
    component: {
        SectionSets
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    decorators: [withKnobs],
}

export const sectionSets = () => ({
    components: {
        SectionSets
    },
    setup() {
      const {product} = useProduct()
      return {
          product
      }
    },
    template: `
      <div style="width:100%; max-width: 1195px; height: 600px; background-color: transparent;">
        <SectionSets :product="product"/>
      </div>
    `
})