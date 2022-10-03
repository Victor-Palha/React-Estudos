import React, { useState } from 'react'
import "./MyForm.css"

const MyForm = ({user}) => {
    // Gerenciamento de dados
    const [nome, setName] = useState(user? user.name : "")
    const [email, setEmail] = useState(user ? user.email : "")
    const handleName = (e)=>{
        setName(e.target.value)
    }
    
    //Submit
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(nome)
        console.log(email)
    }
    return (
        <div>
            {/*Criação do form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='nome'>Nome:</label>
                    <input type="text" name='nome' placeholder='Digite seu nome' onChange={handleName} value={nome}/>
                </div>
                {/*Label envolvendo INPUT */}
                <div>
                    <label>
                        <span>E-mail: </span>
                        <input type="email" placeholder='Digite seu E-mail' name="E-mail" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    </label>
                </div>
                    <input type="submit"/>
            </form>
        </div>
    )
}

export default MyForm