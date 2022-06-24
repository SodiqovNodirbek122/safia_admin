import React, { Suspense } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Route } from 'react-router-dom'
// import { store } from './redux/store'
// import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux'
import { persistor } from './redux/store'
import Loader from './components/Loader'
import Routes from './routes/routes'
import MainLayout from './layouts/MainLayout'
import Login from './pages/Login/Login'
import 'nprogress/nprogress.css'
import OrdersLayout from './layouts/OrdersLayout'

function App() {
  const isLoad = useSelector((state) => state.auth.isLoading)
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className='App'>
        <Suspense fallback={<Loader />}>
          {isLoad ? <Loader /> : undefined}
          <BrowserRouter>
            <Route path='/login' exact component={Login} />
            {/* <Route path='404' exact component={<h1>Not found</h1>} /> */}
            <MainLayout>
              <Routes />
            </MainLayout>

            {/* <OrdersLayout>
              <Routes />
            </OrdersLayout> */}
          </BrowserRouter>
        </Suspense>
      </div>
    </PersistGate>
  )
}

export default App
