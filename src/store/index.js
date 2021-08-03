import React, { createContext, useReducer } from 'react'

const initialState = {
  popular: [],
  related: [],
  searched: [],
  selected: {},
  term: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR':
      return { ...state, popular: action.payload.popular }
    case 'SET_RELATED':
      return { ...state, related: action.payload.related }
    case 'SET_SEARCHED':
      return { ...state, searched: action.payload.searched }
    case 'SET_SELECTED':
      // initialStateに複数のプロパティがある場合は...stateで既に格納済みのstateを再度格納する必要がある
      return { ...state, selected: action.payload.selected }
    case 'SET_TERM':
      return {...state, term: action.payload.term}
    default:
      return state
  }
}

export const Store = createContext({
  globalState: initialState,
  setGlobalState: () => null
})
// ここではglobalStateとsetGlobalStateの初期値を定義しているだけなので下記の記述でも想定どおりの動きとなる
// export const Store = createContext({
//   globalState: null,
//   setGlobalState: null
// })

export const StoreProvider = ({children}) => {
  // useReducerにreducerとinitialStateを与えてstateとdispatch関数を生成する
  const [globalState, setGlobalState] = useReducer(reducer, initialState)
  return (
    // value値を設定することでStoreProviderのchildノードとして渡されるconsumerコンポーネントでvalue値を参照できる
    <Store.Provider value={{ globalState, setGlobalState }}>{children}</Store.Provider>
  )
}
