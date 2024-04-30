import { LOGIN, LOGOUT } from "../action-types"

export const authReducer = (state = { isAuth: false }, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        isAuth: true
      }
    }
    case LOGOUT: {
      return {
        isAuth: false
      }
    }
    default: return state
  }
}
