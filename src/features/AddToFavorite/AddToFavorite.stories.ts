import AddToFavorite from "./AddToFavorite.vue";
import {  withKnobs } from "@storybook/addon-knobs";
import {action} from "@storybook/addon-actions";


export default  {
    title: "features/AddToFavorite",
    component: {AddToFavorite},
    parameters: {
        backgrounds: {
            default: "dark",
        },
    },
    decorators: [withKnobs],
}

export const addToFavorite = () => ({
    components: {
        AddToFavorite
    },
    methods: {
        toggleFavorite: action("toggle favorite"),
    },
    template: `
      <div style="width: 582px; height: 390px; background: transparent">
        <AddToFavorite :is-favorite="false" @click="toggleFavorite"/>
      </div>
    `
})