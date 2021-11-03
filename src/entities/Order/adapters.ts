import {
  createOrderAPI,
  getOrderAPI,
  getOrdersListAPI,
} from "@/services/api/lib/order";
import { Order, OrderHistoryItem } from "@/entities/Order/model";
import {
  getCurrentItem,
  getOrderDelivery,
  getOrderPayment,
  getOrderPrice,
  getSessId,
} from "@/entities/Order/utils";
import { key } from "@/services/vuex";
import { OrderCreateForm } from "@/services/api/model/Order";
import { transformItemsResponse } from "@/entities/Basket/adapters";
import { BasketItem } from "@/entities/Basket/model";

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
    location: {
      index: "",
      address: "",
    },
  };
  return order;
};

export const createOrderAdapter = async (order: Order): Promise<any> => {
  const formObject: OrderCreateForm = {
    DELIVERY_ID: order.delivery.current,
    ORDER_DESCRIPTION: order.comment,
    ORDER_PROP_1: order.contactPerson.name,
    ORDER_PROP_2: order.contactPerson.email,
    ORDER_PROP_3: order.contactPerson.phone,
    ORDER_PROP_4: "190000",
    ORDER_PROP_6: "0000103664",
    PAY_SYSTEM_ID: order.payment.current === "onSite" ? "11" : "13",
    PERSON_TYPE: "1",
    action: "create",
    sessid: order.sessId,
  };

  const formData = new FormData();
  Object.entries(formObject).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await createOrderAPI(formData);
  return response.data;
};

export const getOrdersListAdapter = async (): Promise<OrderHistoryItem[]> => {
  const { data } = await getOrdersListAPI();
  console.log(data.orders);
  const orders: OrderHistoryItem[] = data.orders.map((order) => {
    let quantitySum = 0;
    order.basket.forEach(({ quantity }) => {
      quantitySum += quantity;
    });
    return {
      number: order.id,
      date: order.date,
      status: {
        deliverStatus: order.status.name,
        isPayed: order.isPayed,
      },
      basket: {
        products: transformItemsResponse(order.basket),
        sumDiscount: 0,
        sumOld: 0,
        sumTotal: 0,
      },
      price: order.price,
      code: "" + order.delivery[0].trackingNumber,
      quantity: quantitySum,
      delivery: {
        address: order.deliveryAddress,
        type: "",
        name: order.delivery[0].name,
        price: order.delivery[0].price,
      },
      payment:
        order.payment[0].name === "Оплата на сайте" ? "onSite" : "onDeliver",
    };
  });
  return orders;
};
