import { Promo } from "@/entities/Promo/model";
import { getPromoMainPageAPI } from "@/services/api/lib/video";

export const getPromoAdapter = async (): Promise<Promo> => {
  const response = await getPromoMainPageAPI();

  const promo: Promo = {
    video: response.data.items.map((item) => item.video),
  };

  return promo;
};
