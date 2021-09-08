import axios from 'axios'
import { BIN_REQUEST, BIN_REQUEST_SUCESS, BIN_REQUEST_FAIL } from './types'

export const checkBin = (cardNumber) => async (dispatch) => {
  console.log('Hi there')
  const config = {
    header: {
      "Content-Type": "application/json"
    },
  }
  try {
    const res = await axios.post('/api/check-bin', {"cardNumber" : cardNumber}, config)
    console.log(`checkBin res: ${res}`)
    dispatch({
      type: BIN_REQUEST
    })
    dispatch({
      type: BIN_REQUEST_SUCESS,
      payload: res.data
    })

  } catch (error) {
    console.error(error)
    dispatch({
      type: BIN_REQUEST_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    });
  }
}
