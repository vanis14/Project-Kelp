import {

    CREATE_ITEM,
   
    RETRIEVE_ITEM,
   
    UPDATE_ITEM,
   
    DELETE_ITEM,
   
   } from "./actionTypes";

   import axios from "axios";
   
   import stockManage from "./stockManage";
   
   export const createItem =
   
    (name, description, quantity, cost, retail_price) => async (dispatch) => {
   
      try {
   
        const res = await stockManage.create({
   
          name,
   
          description,
   
          quantity,
   
          cost,
   
          retail_price,
   
        });
   
        dispatch({
   
          type: CREATE_ITEM,
   
          payload: res.data,
   
        });
   
        return Promise.resolve(res.data);
   
      } catch (err) {
   
        return Promise.reject(err);
   
      }
   
    };
   
   export const retrieveItem = () => async (dispatch) => {
   
    try {

      //const res = await axios.get('http://localhost:1337/api/items');
   
      const res = await stockManage.getAll();
   
      dispatch({
   
        type: RETRIEVE_ITEM,
   
        payload: res.data,
   
      });
   
    } catch (err) {
      
      console.log(err);
   
    }
   
   };
   
   export const updateItem = (id, data) => async (dispatch) => {
   
    try {
   
      const res = await stockManage.update(id, data);
   
      dispatch({
   
        type: UPDATE_ITEM,
   
        payload: data,
   
      });
   
      return Promise.resolve(res.data);
   
    } catch (err) {
   
      return Promise.reject(err);
   
    }
   
   };
   
   export const deleteItem = (id) => async (dispatch) => {
   
    try {
   
      await stockManage.delete(id);
   
      dispatch({
   
        type: DELETE_ITEM,
   
        payload: { id },
   
      });
   
    } catch (err) {
   
      console.log(err);
   
    }
   
   };