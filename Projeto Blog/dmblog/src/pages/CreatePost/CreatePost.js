import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useAuthValue} from "../../context/AuthContext"
import { useInsertDocument } from '../../hooks/useInsertDocument'
import styles from "./CreatePost.module.css"

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const {user} = useAuthValue()

  const {insertDocument, response} = useInsertDocument("posts") //nome da collection "posts"

  const handleSubmit = (e)=>{
    e.preventDefault()
    setFormError("")

    //validate image URL

    //criar o array de tags

    //checar todos os valores

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createBy: user.displayName
    })

    //redirect to home page
  }
  return (
    <div className={styles.create_post}>
        <h2>Criar post</h2>
        <p>Escreva sobre o que quiser e compartilhe seu conhecimento</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Título:</span>
            <input 
            type="text" 
            name="title" required 
            placeholder='Pense em um bom título'
            value={title}
            onChange={(e)=> setTitle(e.target.value)}/>
          </label>
          <label>
            <span>URL da imagem:</span>
            <input 
            type="text" 
            name="image" required 
            placeholder='Insira uma imagem que representa o seu post'
            value={image}
            onChange={(e)=> setImage(e.target.value)}/>
          </label>
          <label>
            <span>Conteúdo:</span>
            <textarea 
            name="body" required
            placeholder='Insira o conteúdo do post'
            value={body}
            onChange={(e)=>setBody(e.target.value)}></textarea>
            </label>
            <label>
            <span>Tags:</span>
            <input 
            type="text" 
            name="tags" required 
            placeholder='Insira as tags separadas por vírgulas'
            value={tags}
            onChange={(e)=> setTags(e.target.value)}/>
          </label>
          {!response.loading && <button className='btn'>Publicar</button>}
          {response.loading && <button className='btn' disabled>Aguarde...</button>}
          {response.error && <p className='error'>{response.error}</p>}
          
        </form>
    </div>
  )
}

export default CreatePost