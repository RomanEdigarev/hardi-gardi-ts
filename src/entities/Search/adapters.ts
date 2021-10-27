import { Product } from "@/entities/Products/Product/model";
import { SearchQuery } from "@/services/api/model/Search";
import { searchProductsAPI } from "@/services/api/lib/search";

export const searchProductAdapter = async (
  query: string
): Promise<Product[]> => {
  const formObj: SearchQuery = {
    pageSize: "6",
    q: query,
  };
  const formData = new FormData();
  Object.entries(formObj).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const { data } = await searchProductsAPI(formData);
  if (data.products.length > 0) {
    const products: Product[] = data.products.map((product) => {
      return {
        id: product.id,
        title: product.name,
        currentPrice: product.price.sum,
        prevPrice: product.price.oldSum,
        img: product.img,
        isFavorite: false,
      };
    });
    return products;
  } else {
    data.products;
  }
};
