import { toast } from "react-toastify";
import { api } from "../../services/api.service";

export const signUpUser = async (file, data) => {
  console.log("🚀 ~ signUpUser ~ file:", file);
  try {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    if (file && file.size > 0) {
      formData.append("avatar", file);
    }

    const response = await api.post("/api/v1/auth/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    if (error.response) {
      toast.error(error?.response.data.message, { theme: "colored" });
    }
  }
};

export const loginUser = async (data) => {
  try {
    const response = await api.post("/api/v1/auth/login", data);
    return response;
  } catch (error) {
    if (error.response) {
      toast.error(error?.response.data.message, { theme: "colored" });
    }
  }
};

export const logoutUser = async () => {
  try {
    const response = await api.get("/api/v1/auth/logout");
    return response;
  } catch (error) {}
};

export const verifyemail = async (data) => {
  try {
    const response = await api.post("/api/v1/auth/password/forgot", data);
    return response;
  } catch (error) {
    if (error.response) {
      toast.error(error?.response.data.message, { theme: "colored" });
    }
  }
};

export const resetPassword = async (token, data) => {
  try {
    const response = await api.post(
      `/api/v1/auth/password/reset/${token}`,
      data
    );
    return response;
  } catch (error) {
    if (error.response) {
      toast.error(error?.response.data.message, { theme: "colored" });
    }
  }
};
