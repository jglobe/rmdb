import api from "../api";

export function setEpisodesThunk (pageUrl = null) {
  return async (dispatch) => {
    let pageNumber = 1;

    if (pageUrl) {
      const arr = pageUrl.split("=");
      pageNumber = Number(arr[arr.length - 1]);
    }

    const data = await api.getEpisodesInfoByPage(pageNumber);

    dispatch({
      type: "SET_EPISODES",
      payload: {
        episodes: data.results,
        paginator: {
          prevPageUrl: data.info.prev,
          nextPageUrl: data.info.next,
          pageCount: data.info.pages,
          currentPage: pageNumber,
        },
      },
    });
  };
};
