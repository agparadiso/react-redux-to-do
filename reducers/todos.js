import Inmutable from 'immutable'

export default (state = Inmutable.List(['Code More!']), action) => {
  switch (action.type) {
    case 'addTodo':
      return state.unshift(action.todo)
    case 'deleteTodo':
      return state.filter((todo, index) => index != action.index)
    default:
      return state
  }
}
