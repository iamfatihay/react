import React from 'react'
import Card from './components/Card';
import Header from './components/Header';
import ContainerSSS from './components/styles/ContainerSSS';
import { ThemeProvider } from 'styled-components';


const style = {
  responsive: "724px",
  logoColor: "orange",
}



const App = () => {
  return (
    <ThemeProvider theme={style} >
      <ContainerSSS>
        <Header />
        <Card />
      </ContainerSSS>
    </ThemeProvider>

  );
}

export default App
