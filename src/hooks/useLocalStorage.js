import { useState } from 'react'

export const useLocalStorage = (key, intialValue) => {
  const [storedValue, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : intialValue
    } catch (error) {
      return intialValue
    }
    // esto es para inicializar el estado
  })

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setValue(value)
    } catch (error) {
      console.error(error)
    }
  }
  return [storedValue, setLocalStorage]
}
