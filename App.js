// App.js
import React, { useReducer } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text } from 'react-native'
import Add from './components/Add'
import styles from './styles/Styles'
import { initialTodos, reducer } from './components/Reducer'
import ListItems from './components/ListItems'

export default function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos)

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <Add dispatch={dispatch} todos={todos} />
      <ListItems dispatch={dispatch} todos={todos} />      
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}
