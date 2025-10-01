import { useDispatch } from "react-redux";
import c from "../../utils/nullCheck";
import { close } from "../../redux/slices/detailSlice";

const Head = ({ info }) => {
  const dispatch = useDispatch();

  return (
    <div className="head">
      <div>
        <h3 title="Call Sign">{c(info?.identification?.callsign)}</h3>

        <span title="Flight Number">{c(info?.identification?.number?.default)}</span>

        <span title="FlightIATA/ICAO Type Code">{c(info?.aircraft?.model?.code)}</span>
      </div>

      <button onClick={() => dispatch(close())}>X</button>
    </div>
  );
};

export default Head;