import React from "react";
import UserListContent from "../components/UserListContent";
import styled from "styled-components";
import Notification from "../../../components/Notification";
import { useSelector } from "react-redux";
const Formcontent = styled.div`
  border: solid 1px #333;
  width: 1200px;
  border-radius: 10px;
  overflow: hidden;
  img {
    height: 90vh;
    width: 100%;
  }
`;

const UserList = () => {
  const { notification, userList, del } = useSelector((state) => state.form);
  console.log("list", userList);
  return (
    <div
      style={{ height: "100vh" }}
      className="container-fluid d-flex justify-content-center align-items-center "
    >
      {notification && del ? (
        <Notification text="xóa người dùng thành công" display="d-block" />
      ) : (
        <Notification text="xóa người dùng thành công" display="d-none" />
      )}
      {notification && !del ? (
        <Notification text="cập nhật người dùng thành công" display="d-block" />
      ) : (
        <Notification text="cập nhật người dùng thành công" display="d-none" />
      )}
      <Formcontent>
        <div className="row justify-content-center">
          <div className="col-4  d-sm-block d-none">
            <img src="./img/bg.jpeg" alt="" className="form-img" />
          </div>
          <div className="col-12 col-sm-8 justify-content-center">
            <UserListContent
              listActive={userList}
              placeholder="nhập tên người dùng cần tìm..."
            />
          </div>
        </div>
      </Formcontent>
    </div>
  );
};

export default UserList;
