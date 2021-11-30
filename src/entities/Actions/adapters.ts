import { Action } from "@/entities/Actions/model";
import { getActionsAPI } from "@/services/api/lib/actions";
import { action } from "@storybook/addon-actions";
import { Product } from "@/entities/Products/Product/model";

export const getActionsAdapter = async (): Promise<Product[]> => {
  const response = await getActionsAPI();
  const actions: Product[] = response.data.actions.map((action) => {
    return {
      description: action.preview,
      id: action.id,
      img: action.img,
      title: action.name,
    };
  });

  return actions;
};
