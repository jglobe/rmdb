import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setEpisodesThunk } from "../../actions/setEpisodesAction";

import Episode from "../Episode";
import Spinner from "../Spinner";
import Paginator from "../Paginator";

function EpisodesList () {
  const dispatch = useDispatch();

  const episodes = useSelector(store => store.episodes);

  React.useEffect(() => {
    dispatch(setEpisodesThunk());
  }, [dispatch]);

  if (!episodes.list.length) {
    return <Spinner />;
  }

  function onNextPage() {
    dispatch(setEpisodesThunk(episodes.paginator.nextPageUrl));
  }

  function onPrevPage() {
    dispatch(setEpisodesThunk(episodes.paginator.prevPageUrl));
  }

  return (
    <div className="page">
      <h1 className="page__title">Episodes</h1>
      <div className="page__content">
        <ul>
          {episodes.list.map((episode) => (
            <li key={episode.id}>
              <Episode episode={episode} />
            </li>
          ))}
        </ul>
        <Paginator
          currentPage={episodes.paginator.currentPage}
          pageCount={episodes.paginator.pageCount}
          onNextPage={onNextPage}
          onPrevPage={onPrevPage}
        />
      </div>
    </div>
  );
}

export default EpisodesList;
