import { FC } from "react";

const Spinner: FC = () => 
    <div className="spinner-border text-white animate-pulse" role="status">
        <span className="">Loading...</span>
    </div>

export default Spinner;