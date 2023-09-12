'use client'
import Auth from "@/components/auth/Auth"
import Home from "@/components/home/Home"
import { store, persistor } from "@/redux/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"

export default function App() {
  const isLoggedIn = false
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {isLoggedIn ? <Home /> : <Auth />}
      </PersistGate>
    </Provider>
    </>
  )
}
