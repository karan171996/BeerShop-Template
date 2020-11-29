import axios from "axios";
import { get } from "lodash";

export const fetchBeerCraftData = () => {
  return axios
    .get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beercraft5bac38c.json"
    )
    .then((res) => {
      return {
        json: get(res, "data", []),
        message: "success",
      };
    })
    .catch((err) => {
      return {
        message: err.message,
      };
    });
};

export const fetchBeerCraftImageData = () => {
  return axios
    .get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/beerimages7e0480d.json"
    )
    .then((res) => {
      return {
        json: get(res, "data", []),
        message: "success",
      };
    })
    .catch((err) => {
      return {
        message: err.message,
      };
    });
};
