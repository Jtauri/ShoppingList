import uuid from 'react-native-uuid'

const initialTodos = [
  { id: uuid.v4(), name: 'Kaljaa', completed: false },
  { id: uuid.v4(), name: 'Viinaa', completed: false },
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, { id: action.id, name: action.name, completed: false }]
    case 'DELETE_ITEM':
      return state.filter((todo) => todo.id !== action.id)
    case 'TOGGLE_COMPLETE':
      return state.map((todo) =>
        console.log('todo.id', todo.id, 'action.id', action.id) ||
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    default:
      return state
  }
}

export { initialTodos, reducer }