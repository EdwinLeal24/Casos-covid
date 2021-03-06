import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import { AppLayout, Titulo, BotonHome, BotonBcn, BotonBuscar } from '../styled/styles'

const COD_BCN = 13
const API_URL = `https://analisi.transparenciacatalunya.cat/resource/jvut-jxu8.json?codi=${COD_BCN}&residencia=No`;


const CovidApp = () => {

  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch(API_URL).then(resp => resp.json())
      .then(lista => setDatos(lista
        .sort((a, b) => new Date(b.data_ini) - new Date(a.data_ini)) //Ordena de la fecha mas actual a la mas antigua
        .filter((el, idx) => idx % 7 === 0)) //Filtra los datos para mostrar por semana
      )
  }, [])

  console.log(datos)
  return (
    <>
      <AppLayout>
        <Titulo>Casos de Covid-19 semanales en Catalunya</Titulo>
        <BrowserRouter>

          <NavLink exact to="/">
              <BotonHome>Inicio 🏠</BotonHome>
          </NavLink>

          <NavLink to="/barcelona">
              <BotonBcn>Barcelona</BotonBcn>
          </NavLink>

          <NavLink to="/comarcas">
            <BotonBuscar>Comarcas 🔎</BotonBuscar>
          </NavLink>

        </BrowserRouter>
      </AppLayout>

    </>
  )
}

export default CovidApp