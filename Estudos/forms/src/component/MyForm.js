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
                <input type="submit"/>
            </div>
        </form>
    </div>
  )
}

export default MyForm