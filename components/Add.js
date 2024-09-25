import { Text, View, TextInput, Button, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Add({ addItem }) {
  const [name, setName] = useState('')

  const save = () => {
    if (name.trim() !== '') {
      addItem(name)
      setName('')
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        value={name}
        onChangeText={setName}
        placeholder="Enter new task"
      />
      <Pressable onPress={() => { save(name) }}>
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

  },
  button: {
    color: '#0096FF',
  },
})