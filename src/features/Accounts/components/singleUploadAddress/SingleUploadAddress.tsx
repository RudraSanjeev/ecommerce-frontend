import { Link } from "react-router-dom";
import "./singleuploadAddress.scss";
import AddIcon from "@mui/icons-material/Add";
const SingleAddress = () => {
  return (
    <Link
      to="/accounts/address/add"
      style={{ color: "initial", textDecoration: "none" }}
    >
      <div className="yourUploadAddressSingleBox">
        <AddIcon className="yourUploadAddressSingleBoxIcon" />
        <h3>Add Address</h3>
      </div>
    </Link>
  );
};

export default SingleAddress;
