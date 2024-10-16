import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import React, { useReducer } from 'react'
import Row from './components/Row'
import uuid from 'react-native-uuid'
import Add from './components/Add'

/*näitä ei kyl ennää tarvita mutta jätetään nyt tähän*/
const initialTodos = [
  { id: uuid.v4(), name: 'Osta maitoa'},
  { id: uuid.v4(), name: 'Siivoa huone'},
  { id: uuid.v4(), name: 'Käy lenkillä'},
]

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.id, name: action.name}]
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

console.log('Main komponentti')

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)
  
  const addToDo = (name) => {
    dispatch({
      type: 'ADD_TODO',
      id: uuid.v4(),
      name: name,
    })
  }

  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      id: id,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      {/*välitetään addToDo Add.js:lle*/}
      <Add addToDo={addToDo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Row {...item} deleteTodo={deleteTodo} />}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 8,
    marginTop: 8,
  },
})
