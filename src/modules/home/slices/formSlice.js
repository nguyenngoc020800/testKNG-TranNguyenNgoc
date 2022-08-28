import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: JSON.parse(localStorage.getItem("userList")) || [],
  del: false,
  notification: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submitForm(state, action) {
      const list = [...state.userList, action.payload];
      const pureUserList = list.map((item, index) => {
        return { ...item, id: index };
      });

      return {
        ...state,
        notification: true,
        userList: pureUserList,
      };
    },
    removeNotification(state) {
      return { ...state, notification: false, del: false };
    },
    updateForm(state, action) {
      const data = [...state.userList];
      data.splice(action.payload.id, 1, action.payload);

      localStorage.setItem("userList", JSON.stringify(data));
      return { ...state, userList: data, notification: true };
    },
    deleteUser(state, action) {
      const data = state.userList.filter((item) => item.id !== action.payload);
      const pureUserList = data.map((item, index) => {
        return { ...item, id: index };
      });
      localStorage.setItem("userList", JSON.stringify(pureUserList));
      return {
        ...state,
        userList: pureUserList,
        notification: true,
        del: true,
      };
    },
  },
});

export default formSlice.reducer;
