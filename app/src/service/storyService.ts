import axios from "axios";

export const getAutoComplete = async (querySearch: string) => {
  const response = await axios.get("news/autocompletes", {
    headers: {
      "Content-Type": "application/json",
      "X-AYLIEN-NewsAPI-Application-ID": "0ded468e",
      "X-AYLIEN-NewsAPI-Application-Key": "d62de22539e8bbc572c2a6ab0eb19ed4",
    },
    params: {
      type: "dbpedia_resources",
      term: querySearch,
      language: "en",
      perPage: 3,
    },
  });

  return response.data.autocompletes;
};

export const getStories = async (querySearch: string) => {
  const response = await axios.get("news/stories", {
    headers: {
      "Content-Type": "application/json",
      "X-AYLIEN-NewsAPI-Application-ID": "0ded468e",
      "X-AYLIEN-NewsAPI-Application-Key": "d62de22539e8bbc572c2a6ab0eb19ed4",
    },
    params: {
      language: ["en"],
      perPage: 25,
      cursor: "*",
      "entities.surface_forms.text": [querySearch],
    },
  });

  return response.data;
};
