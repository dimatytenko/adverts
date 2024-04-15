import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertReducer } from './advert';

const advertPersistConfig = {
  key: 'advert',
  storage,
  whitelist: ['favoriteListIds'],
};

const store = configureStore({
  reducer: {
    advert: persistReducer(advertPersistConfig, advertReducer.advert),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

let persistor = persistStore(store);

const rootStore = { store, persistor };

export default rootStore;
