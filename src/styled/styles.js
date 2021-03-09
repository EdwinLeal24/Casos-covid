import styled from 'styled-components';

export const Titulo = styled.h1`
background: #011540;
font-size: 3rem;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`

export const Subtitulo = styled.h3`
background: #011540;
font-size: 3rem;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
`

export const AppLayout = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
  padding: 30px;
`
export const Section = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 80%;
`

const Botones = styled.button`
  background: #fefefe;
  border: 1px solid black;
  border-radius: 20px;
  padding: 3px 10px;
  cursor: pointer;
  outline: none;
  font-size: 15px;
  box-shadow: #a7efdc 4px 4px;
`

export const BotonHome = styled(Botones)`
  position: fixed;
  top: 30px;
  left: 30px;
`

export const BotonBuscar = styled(Botones)`
  position: fixed;
  top: 30px;
  right: 30px;
`
