import React, { useEffect, useContext } from 'react'
// useLocationを使うと現在のURLのパスやサーチパラメータの情報を取得できる
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../apis/index'
import { Store } from '../../store/index'

const VideoDetail = () => {
  const { globalState, setGlobalState } = useContext(Store)
  const location = useLocation()
  const setSelectedVideo = async () => {
    // URLSearchParamsを使うことでstringからobjectに変換してくれる
    const searchParams = new URLSearchParams(location.search)
    const id = searchParams.get('v')
    await fetchSelectedData(id).then((res) => {
      const item = res.data.items.shift()
      setGlobalState({type: 'SET_SELECTED', payload: {selected: item}})
    })
  }
  useEffect(() => {
    setSelectedVideo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>

    </div>
  )
}

export default VideoDetail
