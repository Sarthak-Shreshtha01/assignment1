import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './components/MainContent'
import data from "./data"


function App() {
  return (
    <div className='min-h-screen flex flex-col' >
      <Header headerContent = {data.header} />
      <main className='flex-1' >
        <MainContent mainContent = {data.MainContent} />
      </main>
      <Footer footerContent = {data.footer} />
    </div>
    
  )
}

export default App
