import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import c from "../utils/nullCheck";
import { open } from "../redux/slices/detailSlice";
import ReactPaginate from "react-paginate";
import { useState } from "react";

const List = () => {
  const dispatch = useDispatch();
  const { isLoading, error, flights } = useSelector((store) => store.flight);

  //  page start at the beggining
  const [start, setStart] = useState(0);

  // data per page
  const perPage = 15;

  // data perpage start to end
  const end = start + perPage;

  //show page between select page to end  with slice method
  const currentFlights = flights.slice(start, end);

  //update starting page
  const handlePage = (e) => {
    setStart(e.selected * 10);
  };

  return (
    <div className="list-container">
      <table className="table table-hover table-responsive">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Code</th>
            <th scope="col">Latitude</th>
            <th scope="col">Longitude</th>
            <th scope="col">Degree</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {currentFlights?.map((flight) => (
            <tr>
              <th scope="row">{c(flight.id)}</th>
              <td>{c(flight.code)}</td>
              <td>{c(flight.lat)}</td>
              <td>{c(flight.lng)}</td>
              <td>{c(flight.deg)}</td>

              <td>
                <button onClick={() => dispatch(open(flight.id))}>
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination-wrapper">
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          previousLabel="< previous"
          className="pagination"
          pageCount={Math.ceil(flights.length / perPage)}
          pageRangeDisplayed={3}
          onPageChange={handlePage}
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default List;
