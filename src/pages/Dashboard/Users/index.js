import React, { useEffect, useState } from "react";
import DashLayout from "../../../component/Admin/DashLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import UpdateUserModal from "./UpdateUserModal";
import { deleteUser as removeUser, getAllUsers } from "./actionCreater";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../../redux/slice/userSlice";
import { toast } from "react-toastify";

const Users = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);
  const [userDetail, setUserDetail] = useState({});

  const handleCloseModal = () => {
    setOpen(false);
  };

  const getAllUser = async () => {
    const result = await getAllUsers();
    if (result) {
      dispatch(getUsers(result?.users));
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  const handleDeleteUser = async (id) => {
    const result = await removeUser(id);
    if (result?.success) {
      dispatch(deleteUser(id));
      toast.success("User deleted successfully");
    }
  };

  const handleEditUser = (id) => {
    let user_list = [...users];
    let userInfo = user_list.find((item) => item._id === id);
    setUserDetail(userInfo);
    if (userInfo) {
      setOpen(!open);
    }
  };

  return (
    <React.Fragment>
      <DashLayout title="Users">
        <div className="overflow-auto">
          <table className="w-full table-auto">
            <thead className="border border-primary">
              <tr>
                <th className="text-left p-2 bg-primary text-white">
                  Users ID
                </th>
                <th className="p-2 text-left bg-primary text-white">Email</th>
                <th className="text-left p-2 bg-primary capitalize text-white min-w-[100px]">
                  Name
                </th>
                <th className="text-center p-2 bg-primary capitalize text-white">
                  Role
                </th>
                <th className="text-center p-2 bg-primary capitalize text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="border border-stone-400 border-t-0">
              <tr>
                <td className="h-6" colSpan="3"></td>
              </tr>
              {users && users?.length > 0 ? (
                <>
                  {users.map((item, index) => {
                    return (
                      <>
                        <tr>
                          <td className="p-2" key={index}>
                            {item._id}
                          </td>
                          <td className="p-2">
                            <span>{item.email} </span>
                          </td>
                          <td className="p-2 min-w-[180px]">{item.name}</td>
                          <td className="text-center p-2">
                            <span
                              className={`${
                                item.role === "admin"
                                  ? "text-success"
                                  : "text-danger"
                              }`}
                            >
                              {item.role}
                            </span>
                          </td>
                          <td className="text-center p-2 font-medium">
                            <span className="flex items-center justify-center">
                              <Icon
                                icon="bxs:edit"
                                className="text-xl text-gray-500 cursor-pointer mr-2"
                                onClick={() => {
                                  handleEditUser(item._id);
                                }}
                              />
                              <Icon
                                icon="material-symbols:delete"
                                className="text-xl text-danger cursor-pointer"
                                onClick={() => {
                                  handleDeleteUser(item._id);
                                }}
                              />
                            </span>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </>
              ) : (
                <>
                  <tr>
                    <td
                      colSpan={"5"}
                      className="text-center text-lg font-medium p-2"
                    >
                      Users not found!
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </DashLayout>
      {open && (
        <UpdateUserModal
          open={open}
          closeModal={handleCloseModal}
          userDetail={userDetail}
        />
      )}
    </React.Fragment>
  );
};

export default Users;
