import React from 'react'
import "./MyForm.css"

const MyForm = () => {
  return (
    <div>
        {/*Criação do form */}
        <form>
            <div>
                <label htmlFor='nome'>Nome:</label>
                <input type="text" name='nome' placeholder='Digite seu nome'/>
            </div>
            {/*Label envolvendo INPUT */}
            <div>
                <label>
                    <span>E-mail: </span>
                    <input type="email" placeholder='Digite seu E-mail' name="E-mail"/>
                </label>
            </div>
                <input type="submit"/>
        </form>
    </div>
  )
}

export default MyForm