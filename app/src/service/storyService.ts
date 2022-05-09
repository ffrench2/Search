import axios, { AxiosResponse } from "axios";
import { apiId, apiKey } from "../config";

const GeneralApiSuccess = (response: AxiosResponse): boolean =>
  response.status >= 200 && response.status <= 299;

export const getAutoComplete = async (querySearch: string) => {
  try {
    const response = await axios.get("news/autocompletes", {
      headers: {
        "Content-Type": "application/json",
        "X-AYLIEN-NewsAPI-Application-ID": apiId,
        "X-AYLIEN-NewsAPI-Application-Key": apiKey,
      },
      params: {
        type: "dbpedia_resources",
        term: querySearch,
        language: "en",
        perPage: 3,
      },
    });
    if (!!GeneralApiSuccess) {
      return response.data.autocompletes;
    }
  } catch (error) {
    console.log("getAutoComplete error ", error);
  }
};

export const getStories = async (querySearch: string) => {
  try {
    const response = await axios.get("news/stories", {
      headers: {
        "Content-Type": "application/json",
        "X-AYLIEN-NewsAPI-Application-ID": apiId,
        "X-AYLIEN-NewsAPI-Application-Key": apiKey,
      },
      params: {
        language: ["en"],
        perPage: 25,
        cursor: "*",
        "entities.surface_forms.text": [querySearch],
      },
    });
    if (!!GeneralApiSuccess) {
      return response.data.stories;
    }
  } catch (error) {
    console.log("getStories error ", error);
  }
};
