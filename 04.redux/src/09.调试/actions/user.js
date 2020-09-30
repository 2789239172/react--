import { ADD_USER,ADD_USER_LOAD, ADD_USER_ERR } from '../constants'

export function addUser() {
  return dispatch => {
    dispatch({
      type: ADD_USER_LOAD,
      isLoad: true
    })

    fetch('/user.json')
    .then(res => res.json())
    .then(res => {

      dispatch({
        type: ADD_USER,
        user: res
      })
    })
    .catch(e => {

      dispatch({
        type: ADD_USER_ERR,
        err: e
      })
    })
  }
}
