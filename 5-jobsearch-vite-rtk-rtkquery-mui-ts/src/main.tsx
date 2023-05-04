import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import Categories from "./pages/Categories"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>

    </Provider>
  </React.StrictMode>,
)
