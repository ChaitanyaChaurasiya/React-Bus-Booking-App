import { useLocation, Link } from "react-router-dom";
import AvailableBus from "../availableBus/AvailableBus";
import "./searchBus.css";
import moment from "moment/moment";
import { TbArrowsRightLeft } from "react-icons/tb";
import { GiFastBackwardButton } from "react-icons/gi";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchBus = (props) => {
  const query = useQuery();
  const from = query.get("from");
  const to = query.get("to");
  const date = query.get("date");

  return (
    <>
      <section className="searchBusSection container flex">
        <div className="flexColumns">
          <span>
            <h3>From</h3>
            {from}
          </span>
        </div>

        <TbArrowsRightLeft className="arrowIcon" />

        <div className="flexColumns">
          <span>
            <h3>To</h3>
            {to}
          </span>
        </div>
        <div className="flexColumns">
          <span>
            <h3>Date</h3>
          </span>
          <div className="flex sDate">
            {moment(date).format("ll")}
            &nbsp;
            <span>({moment(date).format("dddd")})</span>
          </div>
        </div>
        <div className="flexColumns">
          <Link to="/">
            <button type="submit" className="btnMod flex">
              <GiFastBackwardButton className="backIcon" />
              <h3>Go Back</h3>
            </button>
          </Link>
        </div>
      </section>
      <hr></hr>
      <AvailableBus busDetail={{ from, to, date }} />
    </>
  );
};

export default SearchBus;
