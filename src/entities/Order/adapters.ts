import { getOrderAPI } from "@/services/api/lib/order";
import { Order } from "@/entities/Order/model";
import {
  getCurrentItem,
  getOrderDelivery,
  getOrderPayment,
  getOrderPrice,
  getSessId,
} from "@/entities/Order/utils";

export const getOrderAdapter = async (): Promise<Order> => {
  // Response API here //
  const { data } = await getOrderAPI();
  // Response API  //

  // Transformation API data here //
  const order: Order = {
    contactPerson: {
      name: "Роман",
      lastName: "Test",
      phone: "123456789",
      email: "test@mail.ru",
    },
    delivery: {
      current: getOrderDelivery(getCurrentItem(data.deliveries.items)),
      items: data.deliveries.items.map((item) => {
        return {
          type: "self",
          variants: undefined,
        };
      }),
    },
    payment: {
      current: getOrderPayment(getCurrentItem(data.paySystems.items)),
      items: data.paySystems.items.map((item) => getOrderPayment(item)),
    },
    comment: data.comment.value,
    sessId: getSessId(data.propGroups),
    price: getOrderPrice(data.total),
  };
  return order;
};
