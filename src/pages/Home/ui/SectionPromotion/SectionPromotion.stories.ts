import SectionPromotion from "./SectionPromotion.vue";
import {withKnobs} from "@storybook/addon-knobs";
import {useProduct} from "@/entities/Product/lib";

export default {
    title: "pages/Home/ui/SectionPromotion",
    component: {
        SectionPromotion
    },
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    decorators: [withKnobs],
}

export const sectionPromotion = () => ({
    components: {
        SectionPromotion
    },
    setup() {
        const {product} = useProduct()
        return {
            product
        }
    },
    template: `
      <div style="width:100%; max-width: 1195px; height: 600px; background-color: transparent;">
        <SectionPromotion />
      </div>
    `
})