import { StatusBar } from 'expo-status-bar'
import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native'
import Constants from 'expo-constants'
import React, { useCallback, useEffect, useState } from 'react'
import Row from './components/Row'
import uuid from 'react-native-uuid'
import Add from './components/Add'
import Asyncstorage from '@react-native-async-storage/async-storage'

const STORAGE_KEY = '@items_key'

export default function App() {
  const [data, setData] = useState([])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    storeData(data)
  }, [data])
  
  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name
    }
    const tempData = [...data, newItem]
    setData(tempData)
  }, [data])

  const select = useCallback((id) => {
    setSelectedId(id)
  }, [])
  
  const getData = async () => {
    try {
      const value = await Asyncstorage.getItem(STORAGE_KEY)
      const json = JSON.parse(value)
      if (json === null) {
        json = []
      }
      setData(json)
    } catch (ex) {
      console.error(ex)
    }
  }

  const storeData = async (value) => {
    try {
      const json = JSON.stringify(value)
      await Asyncstorage.setItem(STORAGE_KEY, json)
    } catch (ex) {
      console.error(ex)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo list</Text>
      <Add addItem={add} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({ item }) => (
          <Row 
            item={item} 
            selectedId={selectedId}
            select={select}
            data={data}
            setData={setData}
            />)}
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
