import React, { useState } from 'react'
import { TextInput, Button, View, StyleSheet, Keyboard } from 'react-native'
import uuid from 'react-native-uuid'
import { Pressable, Text } from 'react-native'


export default function Add({ dispatch, todos }) {
  const [name, setName] = useState('')

  const addToDo = (name) => {
    dispatch({
      type: 'ADD_ITEM',
      id: uuid.v4(),
      name: name,
    })
  }

  const save = () => {
    if (name.trim()) {
      addToDo(name)
      setName('')
      Keyboard.dismiss()
    }
  }

  console.log('Add komponentti')

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        value={name}
        onChangeText={setName}
        placeholder="Add new task..."
        onSubmitEditing={() => save()}
      />
      <Pressable onPress={() => save()}>
        <Text style={styles.button}>Save</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  form: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  button: {
    color: '#0096FF',
    fontSize: 16,
    padding: 8,
  },
})
