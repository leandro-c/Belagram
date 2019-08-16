import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  useEffect(function () {
    window.fetch('https://belagram.leandroccasarin.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
      }, [])
  })
  return (
    <List>
      { categories.map(category =>
        <Item key={category.id}><Category {...category} /></Item>)}
    </List>
  )
}
