import React, { useEffect } from "react";
import FormContent from "../components/FormContent";
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

const Form = () => {
  const { notification, userList } = useSelector((state) => state.form);
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList));
  }, [userList]);
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center " style={{height:"100vh"}}>
      {notification ? (
        <Notification text="Hoàn thành nhập thông tin" display="d-block" />
      ) : (
        <Notification text="Hoàn thành nhập thông tin" display="d-none" />
      )}
      <Formcontent>
        <div className="row justify-content-center">
          <div className="col-4  d-sm-block d-none">
            <img src="./img/bg.jpeg" alt="" className="form-img" />
          </div>
          <div className="col-12 col-sm-8 d-flex justify-content-center align-items-center ">
            <FormContent />
          </div>
        </div>
      </Formcontent>
    </div>
  );
};

export default Form;
