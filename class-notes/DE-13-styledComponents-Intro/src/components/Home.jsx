import React from 'react'
import HeaderS, { LinkS } from './style/HeaderStyle'
import DivStyle from './style/ContainerStyle'
import ButtonS, { DomatesButon } from './style/ButonStyle'

const Home = () => {
  return (
    <DivStyle>
        <HeaderS>STYLED COMPONENTS</HeaderS>
        <LinkS href='#'>LINK</LinkS>

        <ButtonS ozlem>TIKLA1</ButtonS>
        <ButtonS>TIKLA2</ButtonS>

        <DomatesButon yunus>TIKLA3</DomatesButon>
        <DomatesButon>TIKLA4</DomatesButon>
    </DivStyle>
  )
}

export default Home