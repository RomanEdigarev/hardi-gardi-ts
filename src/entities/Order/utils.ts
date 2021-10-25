import {
  OrderDeliveriesItem,
  OrderPaySystemItem,
  OrderPropsGroups,
  OrderTotal,
} from "@/services/api/model/Order";
import {
  OrderDeliveryVariant,
  OrderPaymentType,
  OrderTotalPrice,
} from "@/entities/Order/model";

export const getCurrentItem = (arr: Partial<{ isChecked: true }>[]): any => {
  return arr.find((item) => item.isChecked);
};
export const getOrderDelivery = (
  item: OrderDeliveriesItem
): OrderDeliveryVariant => {
  return {
    comment: item.description,
    name: item.name,
    price: item.price,
    time: item.period,
    type: "self",
    id: item.id,
  };
};

export const getOrderPayment = (item: OrderPaySystemItem): OrderPaymentType => {
  return item.id === "11" ? "onSite" : "onDeliver";
};

export const getSessId = (items: OrderPropsGroups[]): string => {
  const group = items.find((item) => item.code === "HIDDEN");
  return group.props.find((prop) => prop.code === "sessid").value;
};

export const getOrderPrice = (price: OrderTotal): OrderTotalPrice => {
  return {
    delivery: price.sumDelivery,
    products: price.sumOrderFull,
    sale: 0,
    total: price.sumTotal,
  };
};
