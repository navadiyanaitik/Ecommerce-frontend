import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Popup from "../../component/Modal/Modal";
import { useForm } from "react-hook-form";
import { updateProfileInfo } from "./actionCreater";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUserProfile } from "../../redux/slice/userProfileSlice";
import { S3_URL } from "../../services/api.service";

const UpdateProfile = ({ open, closeModal, userDetails = {} }) => {
  const [profileDoc, setProfileDoc] = useState();
  const [previewImage, setPreviewImage] = useState();
  console.log("🚀 ~ UpdateProfile ~ previewImage:", previewImage);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (userDetails) {
      if (userDetails?.avatar) {
        setPreviewImage(S3_URL + userDetails?.avatar);
      }
      reset({
        name: userDetails?.name,
        email: userDetails?.email,
      });
    }
  }, [userDetails, reset]);

  const handleProfileUpload = (e) => {
    let file = e.target.files[0];
    setProfileDoc(file);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const onSubmit = async (data) => {
    const userData = { ...data };
    if (profileDoc) {
      userData.avatar = profileDoc;
    }
    const result = await updateProfileInfo(userData);
    if (result?.success) {
      dispatch(setUserProfile(result?.user));
      toast.success("user profile updated successfully");
      localStorage.setItem("user", JSON.stringify(result?.user));
    } else {
      reset({
        name: userDetails?.name,
        email: userDetails?.email,
      });
      setPreviewImage();
      setProfileDoc();
    }
    closeModal();
  };

  return (
    <Popup open={open} closeModal={closeModal} title="submit review">
      <div>
        <h1 className=" font-semibold text-xl text-center">Update Profile</h1>

        <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="relative w-36 h-36 mx-auto group justify-center mb-10">
              <img
                src={
                  previewImage
                    ? `${previewImage}`
                    : "/images/user-profile-gray.png"
                }
                alt="user-icon"
                className="w-full h-full rounded-full object-cover"
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
                id="upload-profile"
                hidden
                onChange={(e) => {
                  handleProfileUpload(e);
                }}
              />
            </div>
            <div className="flex h-12 border border-gray-400 mb-5">
              <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                <Icon icon="mdi:user" className="text-2xl text-gray-500" />
              </div>
              <input
                className="h-full flex-grow outline-none p-2"
                placeholder="Name"
                name="name"
                {...register("name", {
                  required: "name is required",
                  minLength: {
                    value: 4,
                    message: "Name must be at least 4 characters",
                  },
                  maxLength: {
                    value: 29,
                    message: "Name must be less than 29 characters",
                  },
                })}
              />
            </div>
            {errors?.name && (
              <p className="text-danger mt-2 ps-1">{errors?.name.message}</p>
            )}

            <div className="flex h-12 border border-gray-400 mb-5">
              <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                <Icon
                  icon="ic:baseline-email"
                  className="text-2xl text-gray-500"
                />
              </div>
              <input
                className="h-full flex-grow outline-none p-2"
                placeholder="Email"
                name="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email format is not correct",
                  },
                })}
              />
            </div>
            {errors?.email && (
              <p className="text-danger mt-2 ps-1">{errors?.email.message}</p>
            )}

            <button
              type="submit"
              className="capitalize font-semibold text-lg my-5 p-2 bg-primary text-white w-full hover:bg-[#f9486c]"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </Popup>
  );
};

export default UpdateProfile;
