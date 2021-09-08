import { BIN_REQUEST, BIN_REQUEST_SUCESS, BIN_REQUEST_FAIL } from "../actions/types";

const initialState = {
  loading: true,
  bin: null
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case BIN_REQUEST:
      return {
        loading: true,
        bin: {}
      }
    case BIN_REQUEST_SUCESS: 
      return {
        loading: false,
        bin: payload
      }
    case BIN_REQUEST_FAIL:
      return {
        loading: false,
        error: payload
      }
  
    default:
      return state
  }
}