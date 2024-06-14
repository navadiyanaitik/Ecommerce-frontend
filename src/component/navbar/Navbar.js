import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Popover from "../Popover/Popover";
import { logoutUser } from "../../pages/Auth/actionCreater";
import Cookies from "js-cookie";
import { S3_URL } from "../../services/api.service";
import { useDispatch, useSelector } from "react-redux";
import { resetUserProfile } from "../../redux/slice/userProfileSlice";
import { resetUsers } from "../../redux/slice/userSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isToken, setIsToken] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const user = useSelector((state) => state.userProfile.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const hasToken = localStorage.getItem("token");

    if (hasToken) {
      setIsToken(true);
    } else {
    }
  }, []);

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
    <>
      <nav className="bg-white p-2 sm:p-5">
        <div className="container mx-auto h-full">
          <div className="nav-wrapper flex items-center justify-between p-1.5 h-full">
            <div
              className="nav-logo font-medium text-2xl sm:text-3xl text-primary cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              Fashion Hub
            </div>
            <div className="nav-items hidden md:block ">
              <ul className="m-0 p-0 flex items-center">
                <li>
                  <Link
                    to={"/"}
                    className={`page-link ${
                      path === "/"
                        ? "text-primary text-opacity-100"
                        : "text-black"
                    } cursor-pointer relative  text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}
                  >
                    Home
                  </Link>
                </li>
                {isToken && user?.role === "admin" && (
                  <li>
                    <Link
                      to={"/admin/dashboard"}
                      className={`page-link ${
                        path === "/dashboard"
                          ? "text-primary text-opacity-100"
                          : "text-black"
                      } cursor-pointer relative  text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    to={"/product"}
                    className={`page-link  ${
                      path === "/product"
                        ? "text-primary text-opacity-100"
                        : "text-black"
                    } cursor-pointer relative  text-black text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className={`page-link  ${
                      path === "/contact"
                        ? "text-primary text-opacity-100"
                        : "text-black"
                    } cursor-pointer relative  text-black text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"#"}
                    className={`page-link  ${
                      path === "/about"
                        ? "text-primary text-opacity-100"
                        : "text-black"
                    } cursor-pointer relative  text-black text-opacity-70 font-medium no-underline mx-2.5 hover:text-primary`}
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden md:flex items-center">
              <div>
                <Icon
                  icon="bi:bag-heart-fill"
                  className="text-2xl mr-2.5 mb-1 cursor-pointer text-primary"
                  onClick={() => {
                    navigate("/cart");
                  }}
                />
              </div>

              {isToken ? (
                <div className="flex items-center">
                  <Popover
                    buttonContent={
                      <div className="flex items-center">
                        <img
                          src={
                            user?.avatar
                              ? `${S3_URL}${user.avatar}`
                              : "/images/user-profile-gray.png"
                          }
                          className="w-10 h-10 rounded-full mr-2"
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
              ) : (
                <Link
                  to={"/login"}
                  className="flex items-center cursor-pointer mr-2.5"
                >
                  <span className="mr-3 text-base font-semibold text-primary">
                    Log-In
                  </span>
                  <Icon
                    icon="ic:baseline-account-circle"
                    className="text-3xl mr-2.5"
                  />
                </Link>
              )}
            </div>
            <div className="md:hidden">
              <div className="flex items-center">
                {!isToken && (
                  <Link
                    to={"/login"}
                    className="text-primary font-semibold text-base mr-2"
                  >
                    Login
                  </Link>
                )}
                <Icon
                  icon="charm:menu-hamburger"
                  fontSize="25px"
                  className="cursor-pointer"
                  color="#FF6A88"
                  onClick={() => {
                    setOpen(!open);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
