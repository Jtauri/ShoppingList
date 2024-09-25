import { Text, Pressable, StyleSheet } from "react-native"
import React from "react"
import { Ionicons } from '@expo/vector-icons'

export default function Row({item, selectedId, select, data, setData}) {
    const backgroundColor = item.id === selectedId ? '#f0f0f0' : '#fff'

    const remove = () => {
      const tempArray = data.filter((item) => item.id !== selectedId)
      setData(tempArray)
      select(null)
    }

    return (
        <Pressable onPress={() => select(item.id)} style={[styles.row, {backgroundColor}]}>
          <Text style={[styles.rowText]}>{item.name}</Text>
          {
            item.id === selectedId && <Ionicons name="trash" size={24} onPress={remove} />
          }
        </Pressable>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowText: {
    fontSize: 16,
    padding: 4,
    margin: 4,
  },
})