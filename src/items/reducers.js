import {

    CREATE_ITEM,
   
    RETRIEVE_ITEM,
   
    UPDATE_ITEM,
   
    DELETE_ITEM,
   
   } from "./actionTypes";
   
   const initialState = [];
   
   function itemReducer(items = initialState, action) {
   
    const { type, payload } = action;
   
    switch (type) {
   
      case CREATE_ITEM:
   
        return [...items, payload];
   
      case RETRIEVE_ITEM:
   
        return payload;
   
      case UPDATE_ITEM:
   
        return items.map((item) => {
   
          if (item.id === payload.id) {
   
            return {
   
              ...item,
   
              ...payload,
   
            };
   
          } else {
   
            return item;
   
          }
   
        });
   
      case DELETE_ITEM:
   
        return items.filter(({ id }) => id !== payload.id);
   
      default:
   
        return items;
   
    }
   
   }
   
   export default itemReducer;