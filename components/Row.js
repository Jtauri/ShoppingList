import { Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function Row({ id, name, completed, toggleComplete, deleteTodo }) {
  return (
    <Pressable style={styles.row} onPress={() => toggleComplete(id)}>
      <Text
        style={[styles.rowText, completed && styles.completedText]}
      >
        {name}
      </Text>
      <Ionicons name="trash" size={24} onPress={() => deleteTodo(id)} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  rowText: {
    fontSize: 16,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
})

