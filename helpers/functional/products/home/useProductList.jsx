import { useAppContext } from 'context/state'
import { useEffect, useState } from 'react'
import changeCategory from './changeCategory'
import fetchProductList from './fetchProductList'
import loadMore from './loadMore'
import useProductListState from './useProductListState'

const useProductList = () => {
  const [
    displayData,
    category,
    productAPI,
    setProductAPI,
    loading,
    setLoading,
    showButton,
    setShowButton,
    dataProduct,
    setDataProduct,
  ] = useProductListState();

  const onLoadMore = () => {
    loadMore(
      category,
      productAPI,
      dataProduct,
      setDataProduct,
      setShowButton,
    )
  }

  const onChangeCategory = (e) => {
    changeCategory(e, displayData, productAPI, setDataProduct, setShowButton)
  }

  useEffect(() => {
    fetchProductList(displayData, setProductAPI, setDataProduct, setLoading)
  }, [])

  return [loading, dataProduct, showButton, onLoadMore, onChangeCategory]
}

export default useProductList
