import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { fetchPopularData } from '../apis/index'
import { Store } from '../store/index'

const Top = () => {
  // eslint-disable-next-line no-unused-vars
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Layout>
      Top page
    </Layout>
  )
}

export default Top
