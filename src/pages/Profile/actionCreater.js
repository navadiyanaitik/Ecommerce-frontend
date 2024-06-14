import { api } from "../../services/api.service";

export const getUser = async () => {
  try {
    const response = await api.get("/api/v1/user/profile");
    return response;
  } catch (error) {
    return error;
  }
};

export const updateProfileInfo = async (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  try {
    const response = await api.post("/api/v1/user/profile/update", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const changePassword = async (data) => {
  try {
    const response = await api.post(
      "/api/v1/user/profile/updatePassword",
      data
    );
    return response;
  } catch (error) {
    return error;
  }
};
