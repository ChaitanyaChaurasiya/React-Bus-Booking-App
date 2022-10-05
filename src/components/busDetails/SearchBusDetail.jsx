import { TbArrowsRightLeft } from "react-icons/tb";
import moment from "moment/moment";
import Amenities from "../availableBus/Amenities";

const SearchBusDetail = (props) => {
  const { busDetail, items, viewSeatsHandle, viewSeatsState } = props;
  const { from, to, date } = busDetail;

  return (
    <>
      <div className="busData flex">
        <div className="busNameData ">
          <span className="busName">{items.busName}</span>
          <span className="busType">{items.busType}</span>
        </div>
        <div className="busTimePlaceData ">
          <span className="busTime">{items.busTimeD}</span>
          <span className="busPlace">{from}</span>
          <span className="busDate">{moment(date).format("ll")}</span>
        </div>
        <div className="busTime">
          <span className="busTotalTime">{items.busDiff}</span>
          <span>
            <TbArrowsRightLeft className="arrowIcon" />
          </span>
        </div>

        <div className="busTimePlaceData">
          <span className="busTime">{items.busTimeA}</span>
          <span className="busPlace">{to}</span>
          <span className="busDate">{moment(date).format("ll")}</span>
        </div>
        <div className="busSetData">
          <span className="busPrice">₹{items.busPrice}/-</span>
          <span className="busAvailSet">{items.busAvail}</span>
          <span className="busWindSet">{items.busWind}</span>
        </div>
        <div className="busAvailData">
          <span className="busAvail">{items.busAvail}</span>
          <span className="busWind">{items.busWind}</span>
        </div>
      </div>
      <div className="busExt flex">
        <Amenities />
        <button
          className="busSeatBtn"
          value={items.busId}
          onClick={viewSeatsHandle}
        >
          {!viewSeatsState ? "View Seats" : "Hide Seats"}
        </button>
      </div>
    </>
  );
};

export default SearchBusDetail;
