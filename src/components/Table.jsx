import { Container, Td, Tr } from '../styled/style_home'
import { Table } from "reactstrap";
import NumberFormat from './NumberFormat'


const TableData = ({ lista }) => {

  const rows = lista.map((el, i) => {
    return (
      <Tr key={i}>
        <Td>{el.data_ini.split("T")[0].split("-").reverse().join("/")}</Td>
        <Td>{el.data_fi.split("T")[0].split("-").reverse().join("/")}</Td>
        <Td>{el.ingressos_total}</Td>
        <Td><NumberFormat>{el.casos_confirmat}</NumberFormat></Td>
      </Tr>
    )
  });

  return (
    <>
      <Table hover className='table table-light'>
        <thead className="table-dark">
          <tr>
            <th scope="col">Fecha inicio</th>
            <th scope="col">Fecha fin</th>
            <th scope="col">Ingresos</th>
            <th scope="col">Casos confirmados</th>
          </tr>
        </thead>
        <tbody text='center'>{rows}</tbody>
      </Table>
    </>
  )
}

export default TableData