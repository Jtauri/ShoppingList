// App.js
import React, { useReducer } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, Text } from 'react-native'
import styles from './styles/Styles'
import FetchItems from './components/FetchItems'
import SaveItem from './components/SaveItem'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <SaveItem />
      <FetchItems />
      <StatusBar style="auto" />
    </SafeAreaView>
  )
}