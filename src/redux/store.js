import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});
