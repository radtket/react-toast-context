import React from "react";
import { ADD } from "../contexts/types";
import useToastContext from "../hooks/useToastContext";

const Home = () => {
  const { toastDispatch } = useToastContext();
  return (
    <div>
      <button
        onClick={() =>
          toastDispatch({
            type: ADD,
            payload: {
              content: { sucess: "OK", message: "Hello World" },
            },
          })
        }
        type="button"
      >
        Show basic notification
      </button>
    </div>
  );
};

export default Home;
