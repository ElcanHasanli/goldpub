import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // API reducer removed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

