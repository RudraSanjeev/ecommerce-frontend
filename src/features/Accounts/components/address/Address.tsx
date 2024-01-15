import "./address.scss";
import SingleAddress, { AddressEntity } from "../singleAddress/SingleAddress";
import SingleUploadAddress from "../singleUploadAddress/SingleUploadAddress";
import { useEffect, useState } from "react";
import APIClient from "../../../../services/axios/apiClient";
import AuthService from "../../../../services/axios/AuthService";

const Address = () => {
  const apiClient = new APIClient("/address");
  const [address, setAddress] = useState<AddressEntity[]>([]);
  // const addressData = {
  //   fullName: "name",
  //   houseNo: "houseName",
  //   landmark: "streetName",
  //   city: "city",
  //   state: "state",
  //   pincode: "pincode",
  //   country: "country",
  //   mobileNumber: "phoneNumber",
  // };

  useEffect(() => {
    apiClient
      .getAllAddress({
        headers: {
          token: `Bearer ${AuthService.getToken()}`,
        },
      })
      .then((res: any) => {
        setAddress(res);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="yourAddressContainer">
      <div className="yourAddressWrapper">
        <h1>Your Address </h1>
        <div className="yourAddressWrapperBoxes">
          <SingleUploadAddress />
          {address.map((item) => (
            <SingleAddress key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
