import "./singleAddress.scss";
interface Props {
  name: string;
  houseName: string;
  streetName: string;
  city: string;
  state: string;
  pincode: string | number;
  country: string;
  phoneNumber: string;
}
const SingleAddress = ({
  name,
  houseName,
  streetName,
  city,
  state,
  pincode,
  country,
  phoneNumber,
}: Props) => {
  return (
    <div className="yourAddressSingleBox">
      <h3>{name}</h3>
      <span className="yourAddressHouseName addressInfo">{houseName}</span>
      <span className="yourAddressStreetName addressInfo">{streetName}</span>
      <span className="yourAddressCityStatePin addressInfo">
        {city}, {state}, {pincode}
      </span>
      <span className="yourAddressCountry addressInfo">{country}</span>
      <span className="yourAddressPhoneNumber addressInfo">
        phone number: {phoneNumber}
      </span>
      <div className="options">
        <span className="singleAddressActionButton">
          <button>Edit</button>
        </span>
        <span className="singleAddressActionButton">
          <button>Remove</button>
        </span>
        <span className="singleAddressActionButton">
          <button>Set as Default</button>
        </span>
      </div>
    </div>
  );
};

export default SingleAddress;
