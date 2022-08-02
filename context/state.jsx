import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppWrapper({ children }) {
  const [scrollState, setScrollState] = useState(null)
  const [category, setCategory] = useState('all')
  const [listProduct, setListProduct] = useState(8)
  const [quantity, setQuantity] = useState(0)

  return (
    <AppContext.Provider
      value={{
        scrollState,
        setScrollState,
        quantity,
        setQuantity,
        category,
        setCategory,
        listProduct,
        setListProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
