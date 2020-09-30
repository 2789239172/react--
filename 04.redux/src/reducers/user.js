import { ADD_USER, ADD_USER_LOAD, ADD_USER_ERR } from '../constants'
let userState = {
  isLoad: false,
  err: null,
  user: ''
}
const user = (state = userState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        isLoad: false,
        err: null,
        user: action.user
      }
    case ADD_USER_LOAD:
      return {
        isLoad: action.isLoad,
        err: null,
        user: {}
      }
    case ADD_USER_ERR:
      return {
        isLoad: false,
        err: action.err,
        user: {}
      }
    default:
      return state
  }
}
export default user