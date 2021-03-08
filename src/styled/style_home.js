import styled from 'styled-components'

export const Tr = styled.tr`
  background: #F4F6F6 
`

export const Container = styled.div`
    display: grid;
    border: 2px solid #011540;
    border-radius: 10px;
    padding: 15px;
    margin: 5px;
    place-item: center;

    &:hover ${Tr} {
      box-shadow: #a7efdc 2px 2px;
    }
`

export const Td = styled.td`
  text-align: center;
`


