import Description from "./Description.vue";
import { withKnobs } from "@storybook/addon-knobs";
import { useProduct } from "@/entities/Products/Product/lib";

export default {
  title: "pages/Product/ui/Description",
  component: {
    Description,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [withKnobs],
};

export const description = () => ({
  components: {
    Description,
  },
  setup() {
    const { product } = useProduct();
    return {
      product,
    };
  },
  template: `
      <div style="width:582px; height: auto;">
        <Description title="Описание товара" :is-close="false">
          <template v-slot:content>
            <div class="product-page__body__description__text">
              Знакомьтесь! Это Каролина, она, как любая девочка, очень любит
              наряжаться. Для похода на пляж у неё есть очаровательная шляпка
              и купальник, для дождливой погоды — модные резиновые сапожки, ну
              а на более холодную — теплая куртка. Маленькие модницы с
              удовольствием будут выбирать наряды для Каролины для любого
              случая: будь то прогулка в лесу или вечерний променад. Эта
              магнитная игра поможет ребёнку научиться подбирать одежду по
              погоде и по сезону, а также создать веселое настроение. Большой
              выбор одежды позволит ребёнку самому придумывать сюжет игры,
              интересно и разнообразно проводя время. Вариаций игр множество.
              Играйте всей семьей вместе с Харди Гарди! В серии также
              представлены магнитные игры «Одень мальчика. Макс» и «Одень
              девочку. Алиса». Персонажей можно «знакомить» между собой и
              сочетать предметы одежды.
            </div>
            <div class="product-page__body__description__list">
              <span>Цели игры</span>
              <ul>
                <li>познакомить ребенка с окружающим миром;</li>
                <li>воспитать интерес к природе, к различным профессиям;</li>
                <li>
                  развить у ребенка кругозор, воображение и логическое
                  мышление;
                </li>
                <li>пополнить словарный запас малыша.</li>
              </ul>
            </div>
          </template>
        </Description>
      </div>
    `,
});
