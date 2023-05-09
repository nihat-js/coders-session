import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Index from './pages/Index.jsx'
import Details from './pages/Details.jsx'
import "./main.css"
import { Provider } from 'react-redux'
import {store} from "./store/store.jsx"
ReactDOM.createRoot(document.getElementById('root') ).render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/:city" element={<Details/>} />
    </Routes>
  </BrowserRouter>
  </Provider>
  )
