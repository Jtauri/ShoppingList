import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants'
import React, { useCallback, useState } from 'react'
import Row from './components/Row'
import uuid from 'react-native-uuid'
import Add from './components/Add'

export default function App() {
  const [data, setData] = useState([])
  
  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    }
    const tempData = [...data, newItem]
    setData(tempData)
  }, [data])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <Row item={item} />}
        />
      <Add addItem={add} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
})
