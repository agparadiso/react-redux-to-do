import Inmutable from 'immutable'

export default (state = Inmutable.List(['Code More!']), action) => {
  switch (action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    default:
      return state
  }
}
