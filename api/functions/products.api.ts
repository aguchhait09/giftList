import { GetServerSideProps } from "next";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import { ProductDataInterface } from "@/interface/productsDataInterface.interface";
import { CatWiseProductsInterface } from "@/interface/catProducts.interface";

export const allProductsApi = async () => {
  const res = await axiosInstance.get<ProductDataInterface>(
    endpoints.products.allProducts
  );
  return res?.data;
};

export const categoryWiseProductsApi = async () => {
  const res = await axiosInstance.get<CatWiseProductsInterface>(
    endpoints.products.productByCategory
  );
  return res?.data;
};
