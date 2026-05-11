import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/address.css";

function Address() {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    name: "",
    mobile: "",
    city: "",
    pincode: "",
    fullAddress: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, mobile, city, pincode, fullAddress } =
      address;

    if (
      !name ||
      !mobile ||
      !city ||
      !pincode ||
      !fullAddress
    ) {
      alert("Fill all address fields");
      return;
    }

    localStorage.setItem(
      "deliveryAddress",
      JSON.stringify(address)
    );

    navigate("/payment");
  };

  return (
    <div className="address-container">
      <div className="address-box">
        <h1>Delivery Address</h1>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
        />

        <input
          name="mobile"
          placeholder="Mobile Number"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          onChange={handleChange}
        />

        <textarea
          name="fullAddress"
          placeholder="Full Address"
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          Continue to Payment
        </button>
      </div>
    </div>
  );
}

export default Address;