import { GetServerSideProps } from "next";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import {
  ProductDataInterface
} from "@/interface/productsDataInterface.interface";

export const allProductsApi = async () => {
  const res = await axiosInstance.get<ProductDataInterface>(
    endpoints.products.allProducts
  );
  return res?.data;
};
