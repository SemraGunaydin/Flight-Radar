import t from "../../utils/formatDate";
import c from "../../utils/nullCheck";

const Time = ({ data }) => {
  return (
    <div className="time">
      <div>
        <span>Planned</span>
        <span>{c(t(data.scheduled?.departure))}</span>
      </div>
      <div>
        <span>Planned</span>
        <span>{c(t(data.scheduled?.arrival))}</span>
      </div>
      <div>
        <span>Real.</span>
        <span>{c(t(data.real?.departure))}</span>
      </div>
      <div>
        <span>Estimated</span>
        <span>{c(t(data.estimated?.arrival))}</span>
      </div>
    </div>
  );
};

export default Time;