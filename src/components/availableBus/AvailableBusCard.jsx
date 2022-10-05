import BusDetail from "../busDetails/BusDetail";
import SearchBusDetail from "../busDetails/SearchBusDetail";
import { busData } from "../data/Data";

const AvailableBusCard = (props) => {
  return (
    <>
      {!props.viewSeatsState ? (
        <>
          <div className="containerBus">
            {busData.map((items) => (
              <div className="box" key={items.busId}>
                <SearchBusDetail {...props} items={items} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <BusDetail {...props} />
      )}
    </>
  );
};

export default AvailableBusCard;
