import React, { useEffect, useState } from "react";
import Layout from "../../component/layout/layout";
import UpdateProfile from "./UpdateProfile";
import { getUser } from "./actionCreater";
import moment from "moment/moment";
import ChangePassword from "./ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { setUserProfile } from "../../redux/slice/userProfileSlice";
import { S3_URL } from "../../services/api.service";

const Profile = () => {
  const [open, setOpen] = useState(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);
  // const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userProfile.user);
  console.log("🚀 ~ Profile ~ user:", user);
  const handleCloseModal = () => {
    setOpen(false);
  };
  const handleClosePasswordModal = () => {
    setOpenChangePasswordModal(false);
  };

  const getUserFunc = async () => {
    const result = await getUser();
    if (result?.user) {
      // setUser(result.user);
      dispatch(setUserProfile(result.user));
    }
  };

  useEffect(() => {
    getUserFunc();
  }, [dispatch]);

  return (
    <React.Fragment>
      <Layout>
        <div className="container p-10 pt-0">
          <h1 className="text-3xl font-semibold capitalize mt-5 mb-10 text-center">
            My Profile
          </h1>
          <div className="flex flex-col lg:flex-row items-start">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <div className=" flex items-center justify-center text-center  w-40 h-40 xs:w-52 xs:h-52 sm:w-64 sm:h-64">
                <img
                  src={
                    user?.avatar
                      ? `${S3_URL}${user.avatar}`
                      : "/images/user-profile-gray.png"
                  }
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex justify-center items-center mt-10">
                <button
                  className="capitalize font-semibold text-lg  p-2 bg-primary max-w-48 text-white w-full hover:bg-[#f9486c]"
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  Change Profile
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="max-w-[450px] mx-auto">
                <div className="mb-12">
                  <div className=" mb-3 text-sm sm:text-base">
                    <div className="text-xl font-semibold">Full Name</div>
                    <p className="text-gray-500 capitalize">{user?.name}</p>
                  </div>
                </div>
                <div className="mb-12">
                  <div className="text-sm sm:text-base">
                    <div className="text-xl font-semibold">Email</div>
                    <p className="text-gray-500 mt-2 sm:mt-0">{user?.email}</p>
                  </div>
                </div>
                <div className="mb-12">
                  <div className="text-xl font-semibold">Joined On</div>
                  <p className="text-gray-500 mt-2 sm:mt-0">
                    {moment(user?.doj).format("DD-MM-YYYY")}
                  </p>
                </div>
                <div>
                  <button className="capitalize font-semibold text-lg my-5 p-2 bg-stone-400 text-white w-full hover:bg-stone-500">
                    My Orders
                  </button>
                  <button
                    className="capitalize font-semibold text-lg  p-2 bg-stone-400 text-white w-full hover:bg-stone-500"
                    onClick={() => {
                      setOpenChangePasswordModal(!openChangePasswordModal);
                    }}
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <UpdateProfile
        open={open}
        closeModal={handleCloseModal}
        userDetails={user}
      />
      <ChangePassword
        open={openChangePasswordModal}
        closeModal={handleClosePasswordModal}
      />
    </React.Fragment>
  );
};

export default Profile;
