import axios from 'axios'
import { BOOKING_LIST_FAIL, BOOKING_LIST_REQUEST, BOOKING_LIST_SUCCESS, BOOKING_ADD_FAIL,BOOKING_ADD_REQUEST,BOOKING_ADD_SUCCESS } from '../constants/bookingActions'
export const listBookings = (keyword = '') => async (dispatch,getState) => {
    try {
        dispatch({ type: BOOKING_LIST_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }
        const { data } = await axios.get(`/api/my-bookings/`,config)

        dispatch({
            type: BOOKING_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOKING_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}



export const AddBooking = (mobileNo,address,carId) => async (dispatch,getState) => {
    try {
        dispatch({ type: BOOKING_ADD_REQUEST })
        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }
        const { data } = await axios.post(`/api/book-car/${carId}/`,{'address':address,"mobile_no":mobileNo},config)

        dispatch({
            type: BOOKING_ADD_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: BOOKING_ADD_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}