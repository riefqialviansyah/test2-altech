import { toast } from "react-toastify";

export const successAlert = (message) => {
  return toast.success(message, {
    position: "top-right",
  });
};
