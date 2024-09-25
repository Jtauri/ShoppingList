import { View, TextInput, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

export default function Add({ addItem }) {
  const [name, setName] = useState('')

  const save = () => {
    addItem(name)
    setName('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        value={name}
        onChangeText={setName}
        placeholder="Item name..."
      />
      <Button
        title="Save"
        onPress={() => {save(name)}}
      />
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
        borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    })