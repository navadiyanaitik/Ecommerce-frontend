import React, { useEffect, useRef, useState } from "react";
import Layout from "../../component/layout/layout";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { signUpUser } from "./actionCreater";
import { toast } from "react-toastify";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/slice/userProfileSlice";

const Signup = () => {
  const [file, setFile] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const fileInfo = event.target.files[0];
    setFile(fileInfo);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    if (fileInfo) {
      reader.readAsDataURL(fileInfo);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit = async (data) => {
    let obj = { ...data };
    const result = await signUpUser(file, obj);

    if (result?.success) {
      toast.success(`You are successfuly registered!`);
      localStorage.setItem("token", result.token);
      dispatch(setUserProfile(result?.user));

      setFile([]);
      setPreviewImage(null);
      reset();
      navigate("/");
    }
  };

  return (
    <Layout>
      <div className="bg-white h-auto sm:h-[calc(100vh_-_88px)]">
        <form
          method="POST"
          encType="multipart/form-data"
          className="h-full bg-primary sm:bg-white flex items-center justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-[45%] pl-5 h-full hidden sm:flex items-center justify-end bg-white">
            <div className="h-[490px] max-w-[300px] w-full bg-primary flex flex-col items-center justify-center">
              <div className="relative group">
                <img
                  src={previewImage ? previewImage : "/images/user-profile.png"}
                  alt="user-icon"
                  className="w-28 h-28 rounded-full object-cover"
                />
                <label
                  htmlFor="upload-profile"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-stone-900/30 cursor-pointer transition-all duration-150 rounded-full flex items-center justify-center"
                >
                  <Icon
                    icon="material-symbols:upload"
                    className="text-white text-4xl"
                  />
                </label>
                <input
                  type="file"
                  className="hidden"
                  name="imageFile"
                  id="upload-profile"
                  onChange={handleFileChange}
                />
              </div>
              {/* <p className="text-white text-xs">
                {errors.imageFile
                  ? errors.imageFile.message
                  : "No image selected"}
              </p> */}
            </div>
          </div>
          <div className="w-full sm:w-[55%] h-full bg-primary flex justify-center sm:justify-start items-center p-5 sm:p-0 sm:pr-5">
            <div className="p-8 pb-10 bg-white max-w-96 w-full rounded-xl sm:rounded-none">
              <h1 className="uppercase text-primary font-bold text-2xl text-center mb-8">
                Sign up
              </h1>
              <div className=" flex sm:hidden items-center justify-center mb-10">
                <div className="relative group">
                  <img
                    src={
                      previewImage ? previewImage : "/images/account-pink.png"
                    }
                    alt="user-icon"
                    className={clsx(
                      previewImage ? "scale-100" : "scale-110",
                      "w-28 h-28 rounded-full object-cover"
                    )}
                  />
                  <label
                    htmlFor="upload-profile"
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-stone-900/30 cursor-pointer transition-all duration-150 rounded-full flex items-center justify-center"
                  >
                    <Icon
                      icon="material-symbols:upload"
                      className="text-white text-4xl"
                    />
                  </label>
                  <input
                    type="file"
                    className="hidden"
                    name="imageFile"
                    id="upload-profile"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400"
                  placeholder="name"
                  //   value={formData?.name}
                  //   onChange={(e) => {
                  //     handleInputChange(e);
                  //   }}
                  {...register("name", {
                    required: "Name is required",
                    pattern: {
                      value: /^.{4,29}$/,
                      message: "Name should be grator than 4 cherectors",
                    },
                  })}
                />
                <p className="mt-1.5 min-h-4 text-xs ps-1 text-danger">
                  {errors.name && errors?.name.message}
                </p>
              </div>
              <div className="mb-4">
                <input
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400"
                  placeholder="email"
                  //   value={formData?.email}

                  //   onChange={(e) => {
                  //     handleInputChange(e);
                  //   }}
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                <p className="mt-1.5 min-h-4 text-xs ps-1 text-danger">
                  {errors.email && errors.email.message}
                </p>
              </div>
              <div className="mb-6">
                <input
                  className="h-12 p-2 w-full outline-none border-2 focus:border-black transition-all duration-150 border-primary rounded-md placeholder:text-gray-400"
                  placeholder="password"
                  //   value={formData?.password}
                  //   onChange={(e) => {
                  //     handleInputChange(e);
                  //   }}
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      value: /^.{8,}$/,
                      message: "Password should be grator than 8 cherectors",
                    },
                  })}
                />
                <p className="mt-1.5 min-h-4 text-xs ps-1 text-danger">
                  {errors.password && errors?.password.message}
                </p>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-3 py-2 max-w-28 w-full mx-auto h-12 bg-primary font-medium hover:bg-[#f9486c] rounded-sm text-white uppercase"
                >
                  submit
                </button>
              </div>
              <div className="text-sm text-center mt-5">
                All ready have an account?{" "}
                <Link
                  to={"/login"}
                  className="text-primary font-bold cursor-pointer"
                >
                  Sign In <Icon icon="iconamoon:arrow-top-right-1" />{" "}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Signup;
