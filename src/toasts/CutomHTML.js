import React from "react";
import { ADD } from "../contexts/types";
import useToastContext from "../hooks/useToastContext";

const CutomHTML = () => {
  const { toastDispatch } = useToastContext();
  return (
    <div>
      <button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: () => {
                return (
                  <div>
                    <h4>Error</h4>
                    <p>Something nasty happened!!</p>
                  </div>
                );
              },
              type: "danger",
            },
          })
        }
        type="button"
      >
        Show danger notification with custom HTML
      </button>
    </div>
  );
};

export default CutomHTML;
