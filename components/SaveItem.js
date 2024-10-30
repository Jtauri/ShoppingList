import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Keyboard, Pressable, Text } from 'react-native'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { firestore, SHOPPINGITEMS } from '../firebase/config'
import styles from '../styles/Styles'

export default function SaveItem() {
  const [newItem, setNewItem] = useState('')

  const save = async () => {
    if (newItem.trim()) {
      try {
        await addDoc(collection(firestore, SHOPPINGITEMS), {
          name: newItem.trim(),
          created: serverTimestamp(),

        })
        setNewItem('') // Clear input
        Keyboard.dismiss() // Dismiss keyboard
      } catch (error) {
        console.error('Error adding document: ', error)
      }
    }
  }

  return (
    <View style={styles.savecontainer}>
      <TextInput
        style={styles.saveform}
        placeholder="Add new task..."
        value={newItem}
        onChangeText={setNewItem}
        onSubmitEditing={save}
      />
      <Pressable onPress={save}>
        <Text style={styles.savebutton}>Save</Text>
      </Pressable>
    </View>
  )
}
