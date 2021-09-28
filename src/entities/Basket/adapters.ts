import { addToBasketAPI, getBasketAPI } from "@/services/api/lib/basket";
import { Basket, BasketItem } from "@/entities/Basket/model";

export const addToBasketAdapter = async (
  id: number | string,
  quantity: number = 1
): Promise<Basket> => {
  const response = await addToBasketAPI({ id, quantity });

  const products: BasketItem[] = response.data.items.map((item) => {
    return {
      product: {
        id: item.product.id,
        article: item.product.article,
        title: item.product.name,
        currentPrice: item.priceTotal,
        prevPrice: item.priceFull,
        img: item.product.img,
      },
      quantity: item.quantity,
    };
  });
  debugger;
  return {
    products,
    sumDiscount: response.data.total.sumDiscount,
    sumOld: response.data.total.sumFull,
    sumTotal: response.data.total.sumTotal,
  };
};

export const getBasketAdapter = async (): Promise<Basket> => {
  const response = await getBasketAPI();
  const products: BasketItem[] = response.data.items.map((item) => {
    return {
      product: {
        id: item.product.id,
        title: item.product.name,
        article: item.product.article,
        currentPrice: item.priceTotal,
        prevPrice: item.priceFull,
        img: item.product.img,
      },
      quantity: item.quantity,
    };
  });
  return {
    products,
    sumDiscount: response.data.total.sumDiscount,
    sumOld: response.data.total.sumFull,
    sumTotal: response.data.total.sumTotal,
  };
};
