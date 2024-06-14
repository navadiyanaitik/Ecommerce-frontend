import { api } from "../../services/api.service";

export const getAllProducts = async () => {
  const response = await api.get("/api/v1/product/all");
  return response;
};

export const addProduct = async (data) => {
  const response = await api.post("/api/v1/product/create", data);
  return response;
};
