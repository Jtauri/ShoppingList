import { Text, View, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

//addToDo tulee App.js:stä
export default function Add({ addToDo }) {
  const [name, setName] = useState('')

  const save = () => {
    if (name.trim() !== '') {
      addToDo(name) 
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
