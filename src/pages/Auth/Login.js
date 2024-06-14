import React, { useEffect } from "react";
import Layout from "../../component/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { loginUser } from "./actionCreater";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../redux/slice/userProfileSlice";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.userProfile.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    let hasToken = localStorage.getItem("token");

    if (hasToken) {
      navigate("/");
    } else if (hasToken && user?.role === "admin") {
      navigate("/admin/dashboard");
    }
  }, []);

  const onSubmit = async (data) => {
    const result = await loginUser(data);
    if (result?.success) {
      toast.success(`You are Logged-In!`);
      dispatch(setUserProfile(result.user));
      localStorage.setItem("token", result.token);
      if (result?.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }
    }
    reset();
  };

  return (
    <Layout>
      <div className="bg-white h-[calc(100vh_-_60px)] sm:h-[calc(100vh_-_88px)]">
        <div className="h-full bg-primary sm:bg-white flex items-center justify-center">
          <div className="w-[45%] pl-5 h-full hidden sm:flex items-center justify-end bg-white">
            <div className="h-[440px] max-w-[300px] w-full bg-primary flex items-center justify-center">
              <img src="/images/login.png" className="w-28" alt="login" />
            </div>
          </div>
          <div className="w-full sm:w-[55%] h-full bg-primary flex justify-center sm:justify-start items-center p-5 sm:p-0 sm:pr-5">
            <form
              className="p-8 pb-10 bg-white max-w-96 w-full rounded-xl sm:rounded-none"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="uppercase text-primary font-bold text-2xl text-center mb-8">
                Sign In
              </h1>
              <div className="mb-4">
                <input
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400"
                  placeholder="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                <p className="mt-1.5 text-xs min-h-4 ps-1 text-danger">
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400"
                  placeholder="password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^.{8,}$/,
                      message: "Password should be grator than 8 cherectors",
                    },
                  })}
                />
                <p className="mt-1.5 text-xs min-h-4 ps-1 text-danger">
                  {errors.password && errors.password.message}
                </p>
              </div>
              <div className="text-right">
                <Link
                  to={"/verifyemail"}
                  className="text-primary inline-block font-semibold hover:underline text-right mb-6"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-3 py-2 max-w-28 w-full mx-auto h-12 bg-primary font-medium hover:bg-[#f9486c] rounded-sm text-white uppercase"
                >
                  Sign In
                </button>
              </div>
              <div className="text-sm text-center mt-5">
                Not registered yet?{" "}
                <Link
                  to={"/signup"}
                  className="text-primary font-bold cursor-pointer"
                >
                  Create an account <Icon icon="iconamoon:arrow-top-right-1" />{" "}
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
