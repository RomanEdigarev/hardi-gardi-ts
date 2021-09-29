import {
  addBasketCouponAPI,
  addToBasketAPI,
  changeBasketPositionAPI,
  getBasketAPI,
} from "@/services/api/lib/basket";
import { Basket, BasketItem } from "@/entities/Basket/model";
import { BasketItem as BasketItemAPI } from "@/services/api/model/Basket";

const transformItemsResponse = (items: BasketItemAPI[]): BasketItem[] => {
  return items.map((item) => {
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
      positionID: item.id,
    };
  });
};

export const addToBasketAdapter = async (
  id: number | string,
  quantity: number = 1
): Promise<Basket> => {
  const response = await addToBasketAPI({ id, quantity });

  const products: BasketItem[] = transformItemsResponse(response.data.items);
  return {
    products,
    sumDiscount: response.data.total.sumDiscount,
    sumOld: response.data.total.sumFull,
    sumTotal: response.data.total.sumTotal,
  };
};

export const getBasketAdapter = async (): Promise<Basket> => {
  const response = await getBasketAPI();
  const products: BasketItem[] = transformItemsResponse(response.data.items);
  return {
    products,
    sumDiscount: response.data.total.sumDiscount,
    sumOld: response.data.total.sumFull,
    sumTotal: response.data.total.sumTotal,
  };
};

export const changeBasketPositionAdapter = async (
  positionID,
  quantity: number
): Promise<Basket> => {
  const response = await changeBasketPositionAPI(positionID, quantity);
  const products: BasketItem[] = transformItemsResponse(response.data.items);
  return {
    products,
    sumDiscount: response.data.total.sumDiscount,
    sumOld: response.data.total.sumFull,
    sumTotal: response.data.total.sumTotal,
  };
};

export const addBasketCouponAdapter = async (code: string): Promise<Basket> => {
  const response = await addBasketCouponAPI(code);
  const products: BasketItem[] = transformItemsResponse(response.data.items);
  return {
    products,
    sumDiscount: response.data.total.sumDiscount,
    sumOld: response.data.total.sumFull,
    sumTotal: response.data.total.sumTotal,
  };
};
