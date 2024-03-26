import * as a from './actionTypes'

export const addEmployee = (newEmployee) => {
  return {
    type: a.ADD_EMPLOYEE,
    payload: newEmployee,
  }
}

export const deleteEmployee = (id) => {
  return {
    type: a.DELETE_EMPLOYEE,
    payload: id,
  }
}
