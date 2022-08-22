// import { error, Stack, defaults } from "@pnotify/core";
import s from "./Message.module.css";
// import "@pnotify/core/dist/Material.css";
// defaults.styling = "material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const myError = (text) => {
  toast.error(`${text}`, {
    position: "top-left",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    ddClass: `${s.error}`,
  });
  <ToastContainer
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />;
};

export default myError;
