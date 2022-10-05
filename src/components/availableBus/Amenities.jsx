import { BiWifi } from "react-icons/bi";
import { BiFridge } from "react-icons/bi";
import { BiFirstAid } from "react-icons/bi";
import { GiDeskLamp } from "react-icons/gi";
import { MdOutlineFoodBank } from "react-icons/md";
const Amenities = () => {
  return (
    <>
      <div className="busAmenities">
        <BiWifi />
        <BiFirstAid />
        <BiFridge />
        <MdOutlineFoodBank />
        <GiDeskLamp />
      </div>
    </>
  );
};

export default Amenities;
