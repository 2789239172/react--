import { INCREMENT, DECREMENT } from '../constants'

// export function increment(num) {
//   return {
//     type: INCREMENT,
//     num
//   }
// }

// 异步操作
export function increment(num) {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT,
        num
      })
    }, 1000)
  }
}

export function decrement(num) {
  return {
    type: DECREMENT,
    num
  }
}