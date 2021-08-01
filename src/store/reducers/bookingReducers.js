import {
  BOOKING_LIST_FAIL,
  BOOKING_LIST_REQUEST,
  BOOKING_LIST_SUCCESS,
  BOOKING_ADD_SUCCESS,
  BOOKING_ADD_REQUEST,
  BOOKING_ADD_FAIL,
} from "../constants/bookingActions";
export const bookingListReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case BOOKING_LIST_REQUEST:
      return { loading: true, bookings: [] };

    case BOOKING_LIST_SUCCESS:
      return {
        loading: false,
        bookings: action.payload,
      };

    case BOOKING_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const bookingAddReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_ADD_REQUEST:
      return { loadingBooking: true };

    case BOOKING_ADD_SUCCESS:
      return {
        loadingBooking: false,
        successBooking: true,
      };

    case BOOKING_ADD_FAIL:
      return { loadingBooking: false, errorBooking: action.payload };

    default:
      return state;
  }
};
