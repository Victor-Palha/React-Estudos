import React, { useState } from 'react'
import "./MyForm.css"

const MyForm = () => {
    // Gerenciamento de dados
    const [nome, setName] = useState()
    const [email, setEmail] = useState()
    const handleName = (e)=>{
        setName(e.target.value)
    }
    console.log(nome)
    console.log(email)
    return (
        <div>
            {/*Criação do form */}
            <form>
                <div>
                    <label htmlFor='nome'>Nome:</label>
                    <input type="text" name='nome' placeholder='Digite seu nome' onChange={handleName}/>
                </div>
                {/*Label envolvendo INPUT */}
                <div>
                    <label>
                        <span>E-mail: </span>
                        <input type="email" placeholder='Digite seu E-mail' name="E-mail" onChange={(e)=>setEmail(e.target.value)}/>
                    </label>
                </div>
                    <input type="submit"/>
            </form>
        </div>
    )
}

export default MyForm