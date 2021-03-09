import React from "react";
import { XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines, LineSeries } from 'react-vis';

const Grafico = ({ lista }) => {

  const datosGrafico = lista.map(el => {
    return { x: new Date(el.data_ini), y: el.ingressos_total };
});


  return (
    <>
    <XYPlot xType="time" yDomain={[0, 700]} width={600} height={300}>
        <HorizontalGridLines />
        <VerticalGridLines />
        <XAxis title="Fechas" />
        <YAxis title="Ingresados total" />
        <LineSeries data={datosGrafico} style={{strokeWidth: 2}} />
      </XYPlot> 
    </>
  )
}

export default Grafico