import * as a from './actionTypes'

const initialState = []

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case a.ADD_EMPLOYEE:
      return [...state, action.payload]
    case a.DELETE_EMPLOYEE:
      return state.filter((employee) => employee.id !== action.payload)
    default:
      return state
  }
}

export default employeesReducer
