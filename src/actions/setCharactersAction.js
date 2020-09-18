import api from "../api";

export function setCharactersThunk(pageUrl = null) {
  return async (dispatch) => {
    let pageNumber = 1;

    if (pageUrl) {
      const arr = pageUrl.split("=");
      pageNumber = Number(arr[arr.length - 1]);
    }

    const data = await api.getCharactersInfoByPage(pageNumber);

    const characters = data.results;

    await Promise.all(characters.map(async (character) => {
      const episodeName = await api.getEpisodeName(character.episode[0]);
      character.firstEpisodeName = episodeName;
    }));

    dispatch({
      type: "SET_CHARACTERS",
      payload: {
        characters,
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
