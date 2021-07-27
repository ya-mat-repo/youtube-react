import React, { createContext, useReducer } from 'react'

const initialState = {
  popular: []
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { popular: action.payload.popular }
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})

export const StoreProvider = ({children}) => {
  // useReducerにreducerとinitialStateを与えてstateとdispatch関数を生成する
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    // value値を設定することでStoreProviderのchildノードとして渡されるconsumerコンポーネントでvalue値を参照できる
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}
