import styled from 'styled-components';

export const Titulo = styled.h1`
background: #011540;
font-size: 3rem;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`
export const AppLayout = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`
export const Section = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const BotonHome = styled.button`
  position: fixed;
  top: 30px;
  left: 30px;
  background: #fefefe;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  box-shadow: #a7efdc 4px 4px;
`

export const BotonBcn = styled.button`
  position: fixed;
  top: 30px;
  left: 46%;
  background: #fefefe;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  box-shadow: #a7efdc 4px 4px;
`
export const BotonBuscar = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;
  background: #fefefe;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  box-shadow: #a7efdc 4px 4px;
`
