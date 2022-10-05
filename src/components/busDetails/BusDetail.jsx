import "./busDetail.css";
import { busData } from "../data/Data";
import SearchBusDetail from "./SearchBusDetail";
import SeatData from "../seats/SeatData";
import Seats from "../seats/Seats";
import { selectedBusId, selectedSeats } from "../../store/seatsSlice";
import { useSelector } from "react-redux";

const BusDetail = (props) => {
  const selectedBusIdState = useSelector(selectedBusId);
  const selectedSeatsState = useSelector(selectedSeats);

  const selectedBus = busData.filter(
    (items) => items.busId === selectedBusIdState
  );

  const totalSeatsBooked = selectedSeatsState.length;
  const selectedBusPrice = selectedBus.map((items) => items.busPrice);

  const totalFair = totalSeatsBooked * selectedBusPrice;

  return (
    <>
      {props.viewSeatsState ? (
        <>
          <div className="containerBus">
            {selectedBus.map((items) => (
              <div className="box" key={items.busId}>
                <SearchBusDetail {...props} items={items} />
              </div>
            ))}
            <div className="seatBoxMain flex2">
              <div className="flexColumn">
                <h4 style={{ marginLeft: "10px" }}>Lower Deck</h4>
                <Seats type="Lower" selectedSeat={selectedSeatsState} />

                <h4 style={{ marginLeft: "10px" }}>Upper Deck</h4>
                <Seats type="Upper" selectedSeat={selectedSeatsState} />
              </div>
              <SeatData
                totalFair={totalFair}
                selectedSeatsState={selectedSeatsState}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default BusDetail;
