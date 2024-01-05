import "./addUserAddress.scss";
const AddUserAddress = () => {
  return (
    <div className="addUserAddressContainer">
      <div className="addUserAddressForm">
        <h3 className="formHeading">Add new Address</h3>
        <form>
          <span className="formItem">
            <label htmlFor="Country">Country:</label>
            <select name="Country">
              <option value="india">india</option>
              <option value="Sri lanka">Sri lanka</option>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="Unite Kingdom">Unite Kingdom</option>
              <option value="United States">United States</option>
              <option value="Australia">Australia</option>
            </select>
          </span>
          <span className="formItem">
            <label htmlFor="fullName">full name:</label>
            <input type="text" />
          </span>
          <span className="formItem">
            <label htmlFor="mobileNumber">Mobile number:</label>
            <input type="text" name="mobileNumber" id="mobileNumber" />
          </span>
          <span className="formItem">
            <label htmlFor="House">House:</label>
            <input type="text" />
          </span>
          <span className="formItem">
            <label htmlFor="landmark">landmark:</label>
            <input type="text" />
          </span>

          <span className="formItem">
            <label htmlFor="pincode">pincode:</label>
            <input type="text" />
          </span>

          <span className="formItem">
            <label htmlFor="city">city:</label>
            <input type="text" />
          </span>
          <span className="formItem">
            <label htmlFor="state">State:</label>
            <select name="state">
              <option value="Punjab">Punjab</option>
              <option value="Bihar">Bihar</option>
              <option value="Banglore">Banglore</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </select>
          </span>
        </form>
      </div>
    </div>
  );
};

export default AddUserAddress;
