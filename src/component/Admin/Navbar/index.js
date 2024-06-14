import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import Popover from "../../Popover/Popover";
import { logoutUser } from "../../../pages/Auth/actionCreater";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { S3_URL } from "../../../services/api.service";
import { resetUserProfile } from "../../../redux/slice/userProfileSlice";
import { resetUsers } from "../../../redux/slice/userSlice";

const Navbar = ({ title, setIsExpanded, isExpanded }) => {
  const user = useSelector((state) => state.userProfile.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const result = await logoutUser();
    if (result?.success) {
      localStorage.removeItem("token");
      dispatch(resetUserProfile());
      dispatch(resetUsers());
      window.location.reload();
    }
  };
  return (
    <div className="fixed h-20 border-b border-stone-500 inset-x-0 top-0 w-full bg-white z-20">
      <div className="flex justify-between items-center h-full p-5">
        <span
          className="block md:hidden"
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <Icon icon="tdesign:menu-fold" className="text-xl xs:text-3xl mr-2" />
        </span>
        <h1 className="hidden md:block">
          <Link
            to={"/"}
            className="nav-logo font-medium text-2xl sm:text-3xl text-primary cursor-pointer"
          >
            Fashion Hub
          </Link>
        </h1>

        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold capitalize">
            {title}
          </h1>
        </div>
        <div className="flex items-center">
          <Popover
            buttonContent={
              <div className="flex items-center">
                <img
                  src={
                    user?.avatar
                      ? S3_URL + user.avatar
                      : "/images/user-profile-gray.png"
                  }
                  className="w-10 h-10 rounded-full mr-2 border-2 "
                  alt="profile"
                />
                <Icon
                  icon="icon-park-solid:down-one"
                  className="text-lg text-gray-500"
                />
              </div>
            }
            className="max-w-[120px] w-full z-50"
            placement="bottom-start"
          >
            <div className="bg-white border p-1.5 border-blue shadow-sm rounded-lg max-w-[180px] w-full">
              <ul>
                <li className="mb-1">
                  <Link
                    to={"/profile"}
                    className="text-sm p-1 hover:text-blue rounded-sm font-medium block"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <span
                    className="text-sm p-1 hover:text-danger rounded-sm font-medium block cursor-pointer"
                    onClick={handleLogout}
                  >
                    logout
                  </span>
                </li>
              </ul>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
