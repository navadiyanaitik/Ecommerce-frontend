import { api } from "../../../services/api.service";

export const getAllUsers = async () => {
  try {
    const response = await api.get("/api/v1/user/getAllUsers", {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteUser = async (_id) => {
  try {
    const response = await api.get(`/api/v1/user/delete/${_id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateUserRole = async (_id, data) => {
  try {
    const response = await api.post(`/api/v1/user/updateUserRole/${_id}`, data);
    return response;
  } catch (error) {
    return error;
  }
};
