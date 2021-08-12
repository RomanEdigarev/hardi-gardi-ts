import AddToBasket from "./AddToBasket.vue";
import {  withKnobs } from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";


export default  {
    title: "features/AddToBasket",
    component: {AddToBasket},
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    decorators: [withKnobs],
}

export const addToBasket = () => ({
    components: {
        AddToBasket
    },
    methods: {
        addToBasket: action("add to basket"),
    },
    template: `
      <div style="width: 582px; height: 390px; background: transparent">
        <AddToBasket @click="addToBasket"/>
      </div>
    `
})