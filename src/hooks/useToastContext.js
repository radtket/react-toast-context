import { useContext } from "react";
import ToastContext from "../contexts/context";

const useToastContext = () => {
  return useContext(ToastContext);
};

export default useToastContext;
