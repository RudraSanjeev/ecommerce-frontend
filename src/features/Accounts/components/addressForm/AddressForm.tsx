import "./addressForm.scss";
import { state, country } from "../../data/addressFormData";
import { FormEvent, useState } from "react";
interface formData {
  country: string;
  fullName: string;
  mobileNumber: string;
  house: string;
  landmark: string;
  pinCode: string;
  city: string;
  state: string;
}
const AddressForm = () => {
  const [formData, setFormData] = useState<formData>({
    country: "",
    fullName: "",
    mobileNumber: "",
    house: "",
    landmark: "",
    pinCode: "",
    city: "",
    state: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="addUserAddressContainer">
      <div className="addUserAddressForm">
        <h3 className="formHeading">Add new Address</h3>
        <form onSubmit={handleSubmit}>
          <span className="formItem">
            <label htmlFor="Country">Country:</label>
            <select name="country" onChange={handleChange}>
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
            <input type="text" name="house" onChange={handleChange} />
          </span>
          <span className="formItem">
            <label htmlFor="landmark">landmark:</label>
            <input type="text" name="landmark" onChange={handleChange} />
          </span>

          <span className="formItem">
            <label htmlFor="pincode">pincode:</label>
            <input type="text" name="pinCode" onChange={handleChange} />
          </span>

          <span className="formItem">
            <label htmlFor="city">city:</label>
            <input type="text" name="city" onChange={handleChange} />
          </span>
          <span className="formItem">
            <label htmlFor="state">State:</label>
            <select name="state" onChange={handleChange}>
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
