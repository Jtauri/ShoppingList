import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import React from 'react'
import Row from './components/Row'

export default function App() {
  const data = [
    { id: "1",name: "milk"},
    { id: "2",name: "bread"},
    { id: "3",name: "eggs"},
    { id: "4",name: "butter"},
    { id: "5",name: "cheese"},
  ]

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <Row item={item} />}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 8,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderBottomColor: '#ccc',
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
})
