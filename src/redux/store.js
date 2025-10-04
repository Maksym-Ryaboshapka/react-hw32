import {configureStore} from "@reduxjs/toolkit";

import contactsReducer from "./contacts/reducer";
import filterReducer from "./fiter/reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;