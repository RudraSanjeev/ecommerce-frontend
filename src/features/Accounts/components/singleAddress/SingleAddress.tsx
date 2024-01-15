import "./singleAddress.scss";
import { useDispatch } from "react-redux";
import { setCurrentAddress } from "../../../../redux/addressSlice";
export interface AddressEntity {
  _id?: string | number;
  fullName: string;
  houseNo: string;
  landmark: string;
  city: string;
  state: string;
  pincode: string | number;
  country: string;
  mobileNumber: string;
}
const SingleAddress = ({
  _id,
  fullName,
  houseNo,
  landmark,
  mobileNumber,
  city,
  state,
  pincode,
  country,
}: AddressEntity) => {
  const dispatch = useDispatch();

  const handleCurrentAddress = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(
      setCurrentAddress({
        _id,
        fullName,
        houseNo,
        landmark,
        mobileNumber,
        city,
        state,
        pincode,
        country,
      })
    );
  };
  return (
    <div className="yourAddressSingleBox">
      <h3>{fullName}</h3>
      <span className="yourAddressHouseName addressInfo">{houseNo}</span>
      <span className="yourAddressStreetName addressInfo">{landmark}</span>
      <span className="yourAddressCityStatePin addressInfo">
        {city}, {state}, {pincode}
      </span>
      <span className="yourAddressCountry addressInfo">{country}</span>
      <span className="yourAddressPhoneNumber addressInfo">
        phone number: {mobileNumber}
      </span>
      <div className="options">
        <span className="singleAddressActionButton">
          <button>Edit</button>
        </span>
        <span className="singleAddressActionButton">
          <button>Remove</button>
        </span>
        <span className="singleAddressActionButton">
          <button onClick={handleCurrentAddress}>Set as Default</button>
        </span>
      </div>
    </div>
  );
};

export default SingleAddress;
