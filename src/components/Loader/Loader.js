import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => (
  <div>
    <ThreeDots
      className={s.loader}
      height="80"
      width="80"
      color="#da811d"
      ariaLabel="three-dots-loading"
      timeout={10000}
    />
  </div>
);

export default Loader;
