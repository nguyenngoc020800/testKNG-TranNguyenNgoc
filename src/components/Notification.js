import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Notification = (props) => {
  const dispatch = useDispatch();
  const { notification } = useSelector((state) => state.form);
  console.log(notification);
  const { text, display } = props;
  return (
    <div
      className={`${display}`}
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,.1)",
        position: "fixed",
        zIndex: "10",
      }}
    >
      <div
        className="notifi-content"
        style={{
          borderRadius: "10px",
          position: "absolute",
          top: "30%",
          left: "32%",
          zIndex: "9999",
          padding: "50px",
          backgroundColor: "#fff",
        }}
      >
        <h2 className="mb-3">{text}</h2>
        <button
          className="btn btn-success "
          onClick={() => {
            dispatch({ type: "form/removeNotification" });
          }}
        >
          {" "}
          xác nhận
        </button>
      </div>
    </div>
  );
};

export default Notification;
