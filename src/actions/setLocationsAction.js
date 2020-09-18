import api from "../api";

export function setLocationsThunk (pageUrl = null) {
  return async (dispatch) => {
    let pageNumber = 1;

    if (pageUrl) {
      const arr = pageUrl.split("=");
      pageNumber =  Number(arr[arr.length - 1]);
    }

    const data = await api.getLocationsInfoByPage(pageNumber);

    dispatch({
      type: "SET_LOCATIONS",
      payload: {
        locations: data.results,
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
