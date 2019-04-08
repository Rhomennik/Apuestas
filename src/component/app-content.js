import React from 'react'

// Import Components
import ListaPartidos from './lista-partidos'
import Apuestas from './apuesta'
const ApuestasMain = ({
    partidos,
    equiposSubmitA,
    equiposSubmitB,
    apostando
}) => (
    <div className="cardwidth">
    <div className="card width" >
       <ListaPartidos 
       partidos={partidos}
       equiposSubmitA={equiposSubmitA}
       equiposSubmitB={equiposSubmitB}
       />
        </div>
     <div className="container">
     {!! apostando && <Apuestas />}
     </div>

     </div> 
)

export default ApuestasMain