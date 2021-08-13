import SectionSales from "./SectionSales.vue";
import {withKnobs} from "@storybook/addon-knobs";
import {useProduct} from "@/entities/Product/lib";

export default {
    title: "pages/Home/ui/SectionSales",
    component: {
        SectionSales
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    decorators: [withKnobs],
}

export const sectionSales = () => ({
    components: {
        SectionSales
    },
    setup() {
        const {product} = useProduct()
        return {
            product
        }
    },
    template: `
      <div style="width:100%; max-width: 1195px; height: 600px; background-color: transparent;">
        <SectionSales />
      </div>
    `
})