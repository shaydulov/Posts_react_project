import { DEC, INC } from "../action-types"


export const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INC: {
      return {
        count: state.count + 1
      }
    }
    case DEC: {
      return {
        count: state.count - 1
      }
    }
    default: return state
  }
}
