// import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Home from './src/screens/Home'
import { StatusBar } from 'expo-status-bar'
import Header from './src/components/header'

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Header />
      <Home />
    </>
  )
}
