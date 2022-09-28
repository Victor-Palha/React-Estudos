import React from "react";
const CarDetails = ({marca, ano, cor, novo})=>{
    return(
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {marca}</li>
                <li>Ano: {ano}</li>
                <li>Cor: {cor}</li>
                {novo && <p>Novo carro!</p>}
            </ul>
        </div>
    )
}
export default CarDetails