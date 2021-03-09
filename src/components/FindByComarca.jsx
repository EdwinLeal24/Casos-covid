import React, { useState, useEffect } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Comarcas from '../comarcas/comarcas'
import Table from './Table';
import { Container } from '../styled/style_home'
import { Subtitulo, Section } from '../styled/styles'
import Grafico from './Grafico';

const FindByComarca = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [lista, setLista] = useState([]);
  const [codigo, setCodigo] = useState('01');
  const [comarca, setComarca] = useState("Buscar por comarcas");

  useEffect(() => {
    const api = `https://analisi.transparenciacatalunya.cat/resource/jvut-jxu8.json?codi=${codigo}&residencia=No`;

    fetch(api)
      .then((respuesta) => respuesta.json())
      .then((datos) => setLista(datos.sort((a, b) => new Date(b.data_ini) - new Date(a.data_ini))
        .filter((el, idx) => idx % 7 === 0)))
      .catch((error) => console.log("ERROR al cargar los datos " + error));
    console.log("lanzado " + lista);

  }, [codigo]);

  /* FUNCIONES */

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const CodeAndComarca = (codi, nombre) => { setCodigo((codi)); setComarca((nombre)) };

  /* RETURN */

  const opcionesComarcas = Comarcas.map((el, i) => {
    return <DropdownItem key={i} onClick={() => CodeAndComarca(el.codi, el.nom)}>{el.nom}</DropdownItem>
  });

  return (
    <>
      <Subtitulo>{`Casos en ${(comarca === 'Buscar por comarcas' ? "" : comarca)}`}</Subtitulo>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} className="m-2" >
        <DropdownToggle caret>
          {comarca}
        </DropdownToggle>
        <DropdownMenu right>
          {opcionesComarcas}
        </DropdownMenu>
      </Dropdown>
      <Section>
        <Container>
          <Table lista={lista} />
        </Container>

        <Grafico lista={lista} />
      </Section>

    </>
  )
}

export default FindByComarca