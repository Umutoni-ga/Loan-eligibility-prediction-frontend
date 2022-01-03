import React from "react"
import { Provider } from "react-redux"
import {createStore,applyMiddleWare} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import reduxPromise from "redux-promise"
import thunk from "redux-thunk"
import reducers from "./Reducers/Reducers"

const root = ({children,initialState={}})=>{
    const middleware = applyMiddleWare(thunk,reduxPromise)
    const store = createStore(
        reducers,
        initialState,composeWithDevTools(middleware)
    )
    return <Provider>{children}</Provider>
}

export default root