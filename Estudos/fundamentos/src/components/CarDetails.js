import React from "react";
const CarDetails = ({marca, ano, cor, placa})=>{
    return(
        <div>
            <h3>Marca do carro: {marca}</h3>
            <p>Ano do carro: {ano}</p>
            <p>Cor do carro: {cor}</p>
            <p>Placa do carro: {placa}</p>
        </div>
    )
}
export default CarDetails