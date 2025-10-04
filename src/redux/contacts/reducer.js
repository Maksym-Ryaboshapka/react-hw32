import {createReducer} from "@reduxjs/toolkit";
import {addContact, removeContact} from "./action";

const initialState = [];

const contactsReducer = createReducer(initialState, builder => {
  builder.addCase(addContact, (state, action) => {
    state.push(action.payload);
  }).addCase(removeContact, (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  });
});

export default contactsReducer;