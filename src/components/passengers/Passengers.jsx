import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  addPassengerData,
  addBookingDetails,
  removeBookingDetails,
} from "../../store/seatsSlice";
import { useDispatch } from "react-redux";
const Passengers = (props) => {
  const [passengersData, setPassengersData] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeData = (event) => {
    event.preventDefault();
    setPassengersData({
      ...passengersData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitData = (event) => {
    event.preventDefault();
    if (
      passengersData.name !== "" &&
      passengersData.mobile !== "" &&
      passengersData.email !== ""
    ) {
      dispatch(addPassengerData(passengersData));
      dispatch(addBookingDetails());
      alert("Bus Tickets Booked Successfully!");
      history.push("/mybooking");
      dispatch(removeBookingDetails());
    } else {
      alert("Please fill the details");
    }
  };

  return (
    <>
      <h3 className="mg">Passenger Details:</h3>
      <form className="flex2 ml">
        <div className="flexColumn">
          <input
            className="input"
            type="text"
            name="name"
            value={passengersData.name}
            placeholder="Name"
            onChange={handleChangeData}
            required={true}
          />

          <input
            className="input"
            type="tel"
            value={passengersData.mobile}
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChangeData}
            required={true}
          />

          <input
            className="input"
            type="email"
            value={passengersData.email}
            name="email"
            placeholder="Email"
            onChange={handleChangeData}
            required={true}
          />
          <button className="payBtn" type="submit" onClick={handleSubmitData}>
            <h3>Pay & Book</h3>
          </button>
        </div>
      </form>
    </>
  );
};

export default Passengers;
