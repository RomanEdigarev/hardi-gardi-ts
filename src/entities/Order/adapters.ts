import { getOrderAPI } from "@/services/api/lib/order";
import { Order } from "@/entities/Order/model";
import {
  getCurrentItem,
  getOrderDelivery,
  getOrderPayment,
  getOrderPrice,
  getSessId,
} from "@/entities/Order/utils";
import { key } from "@/services/vuex";

const map = {
  "3": "self",
  "2": "courier",
  "12": "self",
  "11": "courier",
  "22": "post",
};

export const getOrderAdapter = async (): Promise<Order> => {
  // Response API here //
  const { data } = await getOrderAPI();
  // Response API  //

  let obj = {
    self: [],
    courier: [],
    post: [],
  };

  data.deliveries.items.forEach((item) => {
    obj[map[item.id]].push(getOrderDelivery(item));
  });

  // Transformation API data here //
  const order: Order = {
    contactPerson: undefined,
    delivery: {
      current: getOrderDelivery(getCurrentItem(data.deliveries.items)).id,
      items: { ...obj },
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
