import { baseAPI } from './api/baseApi'
// import cartReducer from './cartSlice';
import localeReducer from './localeSlice'

export const reducer = {
  //   cart: cartReducer,
  [baseAPI.reducerPath]: baseAPI.reducer,
  locale: localeReducer,
}
