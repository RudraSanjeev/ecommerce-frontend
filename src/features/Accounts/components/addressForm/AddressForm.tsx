import "./addressForm.scss";
import { state, country } from "../../data/addressFormData";
import { FormEvent, useState } from "react";
import APIClient from "../../../../services/axios/apiClient";
import AuthService from "../../../../services/axios/AuthService";
import { AddressEntity } from "../singleAddress/SingleAddress";
import { useNavigate } from "react-router-dom";
// interface formData {
//   country: string;
//   fullName: string;
//   mobileNumber: string;
//   houseNo: string;
//   landmark: string;
//   pinCode: string;
//   city: string;
//   state: string;
// }
const AddressForm = () => {
  const nav = useNavigate();
  const apiClient = new APIClient("/address");
  const [formData, setFormData] = useState<AddressEntity>({
    fullName: "",
    houseNo: "",
    mobileNumber: "",
    landmark: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(formData);

    apiClient
      .addNewAddress(
        {
          ...formData,
        },
        {
          headers: {
            token: `Bearer ${AuthService.getToken()}`,
          },
        }
      )
      .then(() => {
        setFormData({
          fullName: "",
          houseNo: "",
          mobileNumber: "",
          landmark: "",
          city: "",
          pincode: "",
          state: "",
          country: "",
        });
        nav("/accounts/address");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="addUserAddressContainer">
      <div className="addUserAddressForm">
        <h3 className="formHeading">Add new Address</h3>
        <form onSubmit={handleSubmit}>
          <span className="formItem">
            <label htmlFor="Country">Country:</label>
            <select name="country" defaultValue="India" onChange={handleChange}>
              {country.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </span>
          <span className="formItem">
            <label htmlFor="fullName">full name:</label>
            <input type="text" name="fullName" onChange={handleChange} />
          </span>
          <span className="formItem">
            <label htmlFor="mobileNumber">Mobile number:</label>
            <input
              type="text"
              name="mobileNumber"
              id="mobileNumber"
              onChange={handleChange}
            />
          </span>
          <span className="formItem">
            <label htmlFor="House">House:</label>
            <input type="text" name="houseNo" onChange={handleChange} />
          </span>
          <span className="formItem">
            <label htmlFor="landmark">landmark:</label>
            <input type="text" name="landmark" onChange={handleChange} />
          </span>

          <span className="formItem">
            <label htmlFor="pincode">pincode:</label>
            <input type="text" name="pincode" onChange={handleChange} />
          </span>

          <span className="formItem">
            <label htmlFor="city">city:</label>
            <input type="text" name="city" onChange={handleChange} />
          </span>
          <span className="formItem">
            <label htmlFor="state">State:</label>
            <select
              name="state"
              defaultValue="Andra Pradesh"
              onChange={handleChange}
            >
              {state.map((item) => (
                <option value={item.name} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </span>
          <button type="submit">Add Address</button>
        </form>
      </div>
    </div>
  );
};

export default AddressForm;
