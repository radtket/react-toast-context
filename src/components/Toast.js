import React from "react";

import { REMOVE } from "../contexts/types";
import useToastContext from "../hooks/useToastContext";
import "../styles/toast.scss";

const Toast = ({ toast }) => {
  const { toastDispatch } = useToastContext();

  const renderItem = (content) => {
    if (typeof content === "function") {
      return content();
    }
    return <pre>{JSON.stringify(content, null, 2)}</pre>;
  };

  return (
    <div className="toast">
      <div className="toast-container">
        {toast.map(({ id, type, content}) => {
          return (
            <div
              key={id}
              className={`toast-container-item ${type ? type : ""}`}
            >
              <span
                aria-label="close toast"
                className="toast-close"
                onClick={() =>
                  toastDispatch({ type: REMOVE, payload: { id } })
                }
                role="img"
              >
                &times;
              </span>
              {renderItem(content)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Toast;
