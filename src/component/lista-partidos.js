import React from 'react'

const ListaPatidos = ({partidos, equiposSubmitA, equiposSubmitB}) => (

    <div className="card-body">
        <h5 className="title">Partidos</h5>
    <div className="card-text">{partidos.map((part, index) => (
        <div className="card-body" key={index}>
        <p className="card-text">{part.equipos}</p>
        <button className="btn btn-primary" value={part.a} id={part._id} name={part.equipos} onClick={equiposSubmitA}>{part.a}</button>
    <button  className="btn btn-primary" value={part.b} id={part._id} name={part.equipos} onClick={equiposSubmitB}>{part.b}</button>
    <div className="card width">
    </div>
        </div>
        
    ))}</div>
</div>

)

export default ListaPatidos