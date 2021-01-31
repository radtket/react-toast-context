import React from "react";
import { ADD } from "../contexts/types";
import useToastContext from "../hooks/useToastContext";

const Danger = () => {
  const { toastDispatch } = useToastContext();
  return (
    <div>
      <button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: { sucess: "FAIL", message: "Something nasty!" },
              type: "danger",
            },
          })
        }
        type="button"
      >
        Show danger notification
      </button>
    </div>
  );
};

export default Danger;
