import "./availableBus.css";
import AvailableBusCard from "./AvailableBusCard";
import { useDispatch } from "react-redux";
import { busData } from "../data/Data";
import {
  setViewSeatsState,
  setSelectedBusId,
  addSelectedBusData,
  removeSelectedBusData,
} from "../../store/seatsSlice";
import { viewSeats, selectedBusData } from "../../store/seatsSlice";
import { useSelector } from "react-redux";

const AvailableBus = (props) => {
  const dispatch = useDispatch();
  const viewSeatsState = useSelector(viewSeats);

  const viewSeatsHandle = (event) => {
    event.preventDefault();
    dispatch(setViewSeatsState());
    dispatch(setSelectedBusId(event.target.value));

    !viewSeatsState
      ? dispatch(addSelectedBusData(props.busDetail))
      : dispatch(removeSelectedBusData());
  };

  return (
    <>
      <section className="availableBus container">
        {busData.length === 0 ? (
          <div className="noBus">No Bus Found!</div>
        ) : (
          <>
            {!viewSeatsState ? (
              <div className="totalBus">{busData.length} Bus Found.</div>
            ) : (
              <></>
            )}
          </>
        )}
        <AvailableBusCard
          {...props}
          viewSeatsState={viewSeatsState}
          viewSeatsHandle={viewSeatsHandle}
        />
      </section>
    </>
  );
};

export default AvailableBus;
