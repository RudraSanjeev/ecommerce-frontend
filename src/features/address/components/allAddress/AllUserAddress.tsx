interface Props {
  addresses: {
    country: string;
    fullName: string;
    mobileNumber: string;
    pinCode: string;
    house: string;
    landmark: string;
    city: string;
    state: string;
  }[];
}

const AllUserAddress = ({ addresses }: Props) => {
  return (
    <div className="allUserAddressContainer">
      <h1>Your Addresses</h1>
      <div className="allUserAddresses">
        {addresses.map((address) => (
          <div className="allUserAddressSingleAddressBox">
            <div className="allUserAddressSingleAddressBoxTop">
              <span>{address.fullName}</span>
              <span>{address.house}</span>
              <span>{address.landmark}</span>
              <span>
                {address.city} {address.state} {address.pinCode}
              </span>
              <span>{address.country}</span>
              <span>{address.mobileNumber}</span>
            </div>
            <div className="allUserAddressSingleAddressBoxBottom">
              <span>Edit</span>
              <span>remove</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUserAddress;
