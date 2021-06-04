import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Contact, Footer, NavBar, Portfolio, Title } from './Components/Components'

const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Title />
      <Portfolio />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
