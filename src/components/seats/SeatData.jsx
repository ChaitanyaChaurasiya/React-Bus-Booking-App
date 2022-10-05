import "./seats.css";
import Passengers from "../passengers/Passengers";

const SeatData = (props) => {
  const { selectedSeatsState, totalFair } = props;
  return (
    <>
      <div className="seatBoxData">
        {selectedSeatsState.length !== 0 ? (
          <>
            <h3 className="mg">
              Selected Seats :
              <span style={{ color: "blue" }}>
                &ensp;{`${selectedSeatsState}`}
              </span>
            </h3>
            <h3 className="mg">
              Total Seats :
              <span style={{ color: "blue" }}>
                &ensp;{`${selectedSeatsState.length}`}
              </span>
            </h3>

            <h3 style={{ margin: "5px 20px" }}>
              Total Amount :
              <span style={{ color: "blue" }}>&ensp;₹{`${totalFair}`}/-</span>
            </h3>
            <span className="mg">
              (Taxes will be calculated during payment)
            </span>

            <div className="flexColumn">
              <Passengers {...props} />
            </div>
          </>
        ) : (
          <>
            <div className="noSeat ml">Please Select a Seat.</div>
          </>
        )}
      </div>
    </>
  );
};

export default SeatData;
