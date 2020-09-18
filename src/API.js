import axios from "axios";

const baseURL = "https://rickandmortyapi.com/api/";

class Api {
  instance = axios.create({ baseURL });

  getCharactersInfoByPage = async (page) => {
    const response = await this.instance.get(`character/?page=${page}`);
    return response.data;
  };

  getCharacter = async (id) => {
    const response = await this.instance.get(`character/${id}`);
    return response.data;
  };

  getLocationsInfoByPage = async (page) => {
    const response = await this.instance.get(`location/?page=${page}`);
    return response.data;
  };

  getLocation = async (id) => {
    const response = await this.instance.get(`location/${id}`);
    return response.data;
  };

  getEpisodesInfoByPage = async (page) => {
    const response = await this.instance.get(`episode/?page=${page}`);
    return response.data;
  };

  getEpisode = async (id) => {
    const response = await this.instance.get(`episode/${id}`);
    return response.data;
  };

  getEpisodeName = async (url) => {
    this.instance.defaults.baseURL = "";
    const response = await this.instance.get(url);
    this.instance.defaults.baseURL = baseURL;
    return response.data.name;
  };
}

export default new Api();
