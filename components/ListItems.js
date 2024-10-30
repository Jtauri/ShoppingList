import React from 'react'
import { FlatList } from 'react-native'
import Row from './Row'

export default function ListItems({ dispatch, todos }) {
  
  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_ITEM',
      id: id,
    })
  }

  const toggleComplete = (id) => {
    dispatch({
      type: 'TOGGLE_COMPLETE',
      id: id,
    })
  }

  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Row {...item} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      )}
      keyExtractor={(item) => item.id}
    />
  )
}
