import React, { useEffect, useState } from "react";
import Popup from "../../../component/Modal/Modal";
import { Icon } from "@iconify/react/dist/iconify.js";
import SelectField from "../../../component/SelectField/SelectField";
import { updateUserRole } from "./actionCreater";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../redux/slice/userSlice";

const roles = [
  { id: 1, name: "User" },
  { id: 2, name: "Admin" },
];

const UpdateUserModal = ({ open, closeModal, userDetail = {} }) => {
  const [selectedRole, setSelectedRole] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (userDetail) {
      if (userDetail.role === "admin") {
        setSelectedRole(roles[1]);
      } else {
        setSelectedRole(roles[0]);
      }
    }
  }, [userDetail]);

  const handleUpdateRole = async (e) => {
    e.preventDefault();
    if (userDetail) {
      let _id = userDetail?._id;
      let role = selectedRole?.name.toLowerCase();
      const result = await updateUserRole(_id, {
        role,
      });
      let userInfo = {};
      userInfo["id"] = _id;
      userInfo["role"] = role;
      dispatch(updateUser(userInfo));

      if (result?.success) {
        toast.success(result?.message || "User updated successfully");
        closeModal();
      }
    }
  };

  return (
    <Popup open={open} closeModal={closeModal} title="submit review">
      <div>
        <h1 className=" font-semibold text-xl sm:text-2xl text-center">
          Update User Role
        </h1>
        <form className="mt-10" onSubmit={handleUpdateRole}>
          <div>
            <div className="mb-3">
              <span className="text-gray-600 font-medium text-base sm:text-lg mr-2 inline-block min-w-16">
                Name&nbsp;:
              </span>
              <span className="capitalize text-gray-500 text-sm sm:text-base font-medium">
                {userDetail?.name}
              </span>
            </div>
            <div>
              <span className="text-gray-600 font-medium text-base sm:text-lg mr-2 inline-block min-w-16">
                Email&nbsp;:
              </span>
              <span className="text-gray-500 text-sm sm:text-base font-medium">
                {userDetail?.email}
              </span>
            </div>
            <div className="flex h-12 border border-gray-400 my-5">
              <div className="h-12 w-12 grid place-items-center border-r border-gray-400">
                <Icon
                  icon="carbon:category"
                  className="text-2xl text-gray-500"
                />
              </div>
              <div className="flex-grow">
                <SelectField
                  listItems={roles}
                  selected={selectedRole}
                  setSelected={setSelectedRole}
                />
              </div>
            </div>

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

export default UpdateUserModal;
