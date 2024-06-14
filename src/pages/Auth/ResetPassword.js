import React, { useRef } from "react";
import Layout from "../../component/layout/layout";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate, useParams } from "react-router-dom";
import { resetPassword } from "./actionCreater";
import { toast } from "react-toastify";
import { resetUserProfile } from "../../redux/slice/userProfileSlice";
import { resetUsers } from "../../redux/slice/userSlice";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = params?.id;
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm(formOptions);

  const onSubmit = async (data) => {
    let field = { ...data };
    delete field?.confirmPassword;

    const result = await resetPassword(token, field);
    if (result?.success) {
      toast.success("your passwored reset successfully");
      navigate("/login");
      localStorage.removeItem("token");
      dispatch(resetUserProfile());
      dispatch(resetUsers());
      window.location.reload();
    }
    reset();
  };
  return (
    <Layout>
      <div className="bg-white h-auto sm:h-[calc(100vh_-_88px)]">
        <div className="h-full bg-primary sm:bg-white flex items-center justify-center">
          <div className="w-[45%] pl-5 h-full hidden sm:flex items-center justify-end bg-white">
            <div className="h-[370px] max-w-[300px] w-full bg-primary flex items-center justify-center">
              <img
                src="/images/forgot-password.png"
                className="w-32"
                alt="key"
              />
            </div>
          </div>
          <div className="w-full sm:w-[55%] h-full bg-primary flex justify-center sm:justify-start items-center p-5 sm:p-0 sm:pr-5">
            <form
              className="p-8 pb-10 bg-white max-w-96 w-full rounded-xl sm:rounded-none"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="uppercase text-primary font-bold text-2xl text-center mb-8">
                Reset Password
              </h1>
              <div className="mb-4">
                <input
                  name="password"
                  type="password"
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-800"
                  placeholder="create password"
                  {...register("password")}
                />
                <p className="mt-1.5 text-xs min-h-4 ps-1 text-danger">
                  {errors?.password && errors?.password.message}
                </p>
              </div>
              <div className="mb-6">
                <input
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-800"
                  placeholder="confirm password"
                  name="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                />
                <p className="mt-1.5 text-xs min-h-4 ps-1 text-danger">
                  {errors?.confirmPassword && errors?.confirmPassword.message}
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-3 py-2 max-w-28 w-full mx-auto h-12 bg-primary font-medium hover:bg-[#f9486c] rounded-sm text-white uppercase"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPassword;
