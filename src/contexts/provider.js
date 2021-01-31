import React, { useReducer } from "react";
import { createPortal } from "react-dom";
import Toast from "../components/Toast";
import ToastContext from "./context";
import toastReducer from "./reducer";

export default ({ children }) => {
  const [toast, toastDispatch] = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={{ toast, toastDispatch }}>
      {children}
      {createPortal(<Toast toast={toast} />, document.body)}
    </ToastContext.Provider>
  );
};
