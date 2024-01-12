import "./address.scss";
import SingleAddress from "../singleAddress/SingleAddress";
import SingleUploadAddress from "../singleUploadAddress/SingleUploadAddress";

const Address = () => {
  const addressData = {
    name: "name",
    houseName: "houseName",
    streetName: "streetName",
    city: "city",
    state: "state",
    pincode: "pincode",
    country: "country",
    phoneNumber: "phoneNumber",
  };
  return (
    <div className="yourAddressContainer">
      <div className="yourAddressWrapper">
        <h1>Your Address </h1>
        <div className="yourAddressWrapperBoxes">
          <SingleUploadAddress />
          <SingleAddress {...addressData} />
          <SingleAddress {...addressData} />
        </div>
      </div>
    </div>
  );
};

export default Address;
