import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setLocationsThunk } from "../../actions/setLocationsAction";

import Location from "../Location";
import Spinner from "../Spinner";
import Paginator from "../Paginator";

function LocationsList () {
  const dispatch = useDispatch();

  const locations = useSelector(store => store.locations);

  React.useEffect(() => {
    dispatch(setLocationsThunk());
  }, []);

  if (!locations.list.length) {
    return <Spinner />;
  }

  function onNextPage() {
    dispatch(setLocationsThunk(locations.paginator.nextPageUrl));
  }

  function onPrevPage() {
    dispatch(setLocationsThunk(locations.paginator.prevPageUrl));
  }

  return (
    <>
      <div className="page">
        <h1 className="page__title">Locations</h1>
        <div className="page__content">
          <ul>
            {locations.list.map((location) => (
              <li key={location.id}>
                <Location location={location} />
              </li>
            ))}
          </ul>
          <Paginator
            currentPage={locations.paginator.currentPage}
            pageCount={locations.paginator.pageCount}
            onNextPage={onNextPage}
            onPrevPage={onPrevPage}
          />
        </div>
      </div>
    </>
  );
}

export default LocationsList;
