import React, { useEffect, useState } from 'react'
import { Category } from '../Category'
import { List, Item, Spinner } from './styles'
// Custom Hook
const useCategoriesData = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  // uno para recuperar los datos de las categorias
  useEffect(function () {
    setLoading(true)
    window.fetch('https://belagram-server.leandroccasarin.now.sh/categories')
      .then(res => res.json())
      .then(res => {
        setCategories(res)
        setLoading(false)
      }, [])
  })
  return { categories, loading }
}
export const ListOfCategories = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  // otro para mostrar las categorias fijas cuando haga falta
  /* useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed]) */

  useEffect(function () {
    function onScroll (e) {
      const isShowFixed = window.scrollY > 200
      setShowFixed(isShowFixed)
    }

    document.addEventListener('scroll', onScroll)

    return function () {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  // puedo usar mas de un useEffect
  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category =>
          <Item key={category.id}><Category {...category} /></Item>)
      }
    </List>
  )
  // if (loading) return <Spinner />
  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>
  )
}
