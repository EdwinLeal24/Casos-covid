import {
  BrowserRouter,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import { AppLayout, Titulo, BotonHome, BotonBuscar } from '../styled/styles'

import Home from './Home'

const CovidApp = () => {

  
  return (
    <>
      <AppLayout>
        <Titulo>Casos de Covid-19 semanales en Catalunya</Titulo>
        <BrowserRouter>

          <NavLink exact to="/">
              <BotonHome>Inicio 🏠</BotonHome>
          </NavLink>

          <NavLink to="/comarcas">
            <BotonBuscar>Comarcas 🔎</BotonBuscar>
          </NavLink>

          <Switch>
            <Route exactpath='/' component={Home} />
          </Switch>

        </BrowserRouter>
      </AppLayout>

    </>
  )
}

export default CovidApp