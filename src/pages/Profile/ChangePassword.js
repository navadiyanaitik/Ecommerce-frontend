import React, { useState } from "react";
import Popup from "../../component/Modal/Modal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Icon } from "@iconify/react/dist/iconify.js";
import { changePassword } from "./actionCreater";
import { toast } from "react-toastify";

const ChangePassword = (props) => {
  const { closeModal, open } = props;
  const [isShow, setIsShow] = useState({
    oPassword: false,
    nPassword: false,
    cPassword: false,
  });

  const handlePasswordVisibility = (key, value) => {};

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword")], "Password must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(formOptions);

  const onSubmit = async (value) => {
    const data = { ...value };
    delete data.confirmPassword;
    const result = await changePassword(data);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.response.data.message);
    }
    reset();
  };
  return (
    <Popup open={open} closeModal={closeModal} title="submit review">
      <div>
        <h1 className=" font-semibold text-xl text-center">Change Password</h1>

        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="flex h-12 border border-gray-400">
              <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                <Icon
                  icon="material-symbols:key"
                  className="text-2xl text-gray-500"
                />
              </div>
              <input
                className="h-full flex-grow outline-none p-2"
                placeholder="Old password"
                name="oldPassword"
                {...register("oldPassword")}
              />
            </div>
            {errors?.oldPassword && (
              <p className="text-danger mt-2 ps-1">
                {errors?.oldPassword.message}
              </p>
            )}

            <div className="flex h-12 border border-gray-400 mt-5">
              <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                <Icon
                  icon="mdi:lock-alert"
                  className="text-2xl text-gray-500"
                />
              </div>
              <input
                className="h-full flex-grow outline-none p-2"
                placeholder="New password"
                name="newPassword"
                {...register("newPassword")}
              />
            </div>
            {errors?.newPassword && (
              <p className="text-danger mt-2 ps-1">
                {errors?.newPassword.message}
              </p>
            )}

            <div className="flex h-12 border border-gray-400 mt-5">
              <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                <Icon
                  icon="mdi:lock-check"
                  className="text-2xl text-gray-500"
                />
              </div>
              <input
                className="h-full flex-grow outline-none p-2"
                placeholder="Confirm password"
                name="confirmPassword"
                {...register("confirmPassword")}
              />
            </div>
            {errors?.confirmPassword && (
              <p className="text-danger mt-2 ps-1">
                {errors?.confirmPassword.message}
              </p>
            )}

            <button
              type="submit"
              className="capitalize font-semibold text-lg mt-5 p-2 border border-primary bg-primary text-white w-full hover:bg-[#f9486c]"
            >
              Update
            </button>
            <button
              type="reset"
              className="capitalize font-semibold text-lg my-5 p-2 border border-danger w-full text-danger"
              onClick={() => {
                reset();
                closeModal();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
};

export default ChangePassword;
