import React from "react";
import Layout from "../../component/layout/layout";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useForm } from "react-hook-form";
import { verifyemail } from "./actionCreater";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (email) => {
    const result = await verifyemail(email);
    if (result) {
      toast.success(
        result?.message || "your requested has been executed successfully"
      );
    }
  };
  return (
    <React.Fragment>
      <Layout>
        <div className="bg-white h-auto sm:h-[calc(100vh_-_88px)]">
          <div className="container h-full flex justify-center items-center">
            <div className="max-w-lg w-full">
              <div className="min-h-20 p-3 bg-primary flex items-center justify-center">
                <h1 className="text-center text-xl text-white">
                  Verify You Email
                </h1>
              </div>
              <div className="shadow-md p-4 pb-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex mt-5 h-12 border border-gray-400">
                    <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                      <Icon
                        icon="mdi:email-check"
                        className="text-2xl text-gray-500"
                      />
                    </div>
                    <input
                      className="h-full flex-grow outline-none p-2"
                      placeholder="Enter your Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Email format does not match",
                        },
                      })}
                    />
                  </div>
                  <p className="mt-1.5 text-xs min-h-4 ps-1 text-danger">
                    {errors.email && errors.email.message}
                  </p>
                  <div className="flex justify-center items-center">
                    <button
                      type="submit"
                      className="capitalize font-semibold text-lg mt-10 p-2 bg-primary text-white hover:bg-[#f9486c]"
                      onClick={() => {}}
                    >
                      Verify
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default VerifyEmail;
