import { useEffect, useState } from 'react'
import { Subtitulo, Section } from '../styled/styles'
import { Container } from '../styled/style_home'
import Table from './Table'
import Grafico from './Grafico'

const Home = () => {

  const [lista, setLista] = useState([]);

  useEffect(() => {
    const codigo = 13;
    const api_url = `https://analisi.transparenciacatalunya.cat/resource/jvut-jxu8.json?codi=${codigo}&residencia=No`;

    fetch(api_url)
      .then((respuesta) => respuesta.json())
      .then((datos) => setLista(datos
        .filter((el, idx) => idx % 7 === 0)
        .sort((a, b) => new Date(b.data_ini) - new Date(a.data_ini))))
      .catch((error) => console.log("ERROR al cargar los datos " + error));
  }, [])

  return (
    <>
      <Subtitulo>Casos en Barcelona</Subtitulo>
      { (lista.length > 0) ? (
        <Section>
          <Container>
            <Table lista={lista} />
          </Container>

          <Grafico lista={lista} />
        </Section>
      ) : (
          <h1>Cargando...</h1>
        )}

    </>
  )
}

export default Home