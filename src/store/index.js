import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
    carDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
} from "./reducers/userReducers";
import { carAvailableListReducer, carListReducer, productReviewCreateReducer } from "./reducers/carReducers";
import { bookingAddReducer, bookingListReducer } from "./reducers/bookingReducers";


const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  carList: carListReducer,
  productDetails: carDetailsReducer,
  productReviewCreate: productReviewCreateReducer,

  carAvailableList:carAvailableListReducer,
  bookingList: bookingListReducer,
  bookingAdd: bookingAddReducer



});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;