import {
  GET_PRODUCT_NAME,
  FILTER_BY_BRAND,
  FILTER_BY_TYPE,
  FILTER_BY_GRADUATION,
  FILTER_BY_ML,
  FILTER_BY_PRICE,
  FILTER_BY_AZ,
  FILTER_BY_ZA,
} from "./actionsTypes";

import axios from "axios";

//busqueda por nombre
export const getProductByName = (name) => {
  // ruta del searchbar
  return async function (dispatch) {
    try {
      let result; // falta la ruta
      return dispatch({
        type: GET_PRODUCT_NAME,
        payload: result.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//filtro por marca
export const filterByBrand = (filter) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_BY_BRAND,
        payload: filter,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//filtro por tipo
export const filterByType = (filter) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_BY_TYPE,
        payload: filter,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
//filtro por graduacion
export const filterByGraduation = (filter) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_BY_GRADUATION,
        payload: filter,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const filterByML = (filter) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_BY_ML,
        payload: filter,
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export const filterByPrice = (filter) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: FILTER_BY_PRICE,
        payload: filter,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
export const filterByAZ = (filter) => {
  return async function (dispatch) {
    try {
      dispatch({
        type: FILTER_BY_AZ,
        payload: filter,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
