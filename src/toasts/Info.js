import React from "react";
import { ADD } from "../contexts/types";
import useToastContext from "../hooks/useToastContext";

const Info = () => {
  const { toastDispatch } = useToastContext();
  return (
    <div>
      <button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: { sucess: "OK", message: "Info message" },
              type: "info",
            },
          })
        }
        type="button"
      >
        Show Info notification
      </button>
    </div>
  );
};

export default Info;
