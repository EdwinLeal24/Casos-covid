import { Container, Td, Tr } from '../styled/style_home'
import { Section } from '../styled/styles'
import { Table } from "reactstrap";


const TableData = ({ lista }) => {

  const rows = lista.map((el, i) => {
    return (
      <Tr key={i}>
        <Td>{el.data_ini.split("T")[0].split("-").reverse().join("/")}</Td>
        <Td>{el.data_fi.split("T")[0].split("-").reverse().join("/")}</Td>
        <Td>{el.ingressos_total}</Td>
        <Td>{el.casos_confirmat}</Td>
      </Tr>
    )
  });

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Ingresos</th>
            <th scope="col">Casos confirmados</th>
          </tr>
        </thead>
        <tbody text='center'>{rows}</tbody>
      </Table>
    </Container>
  )
}

export default TableData