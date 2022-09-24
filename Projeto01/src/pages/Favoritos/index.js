import './favoritos.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        const myList = localStorage.getItem("@primeflix")
        setFilmes(JSON.parse(myList) || [])
    }, [])


    function deleteFilme(id){
        const filterList = filmes.filter((filme)=>{
            return (filme.id != id)
        })
        setFilmes(filterList)
        localStorage.setItem("@primeflix", JSON.stringify(filterList))
        toast.success("Filme excluido com sucesso!")
    }
    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <p className='error-filmes'>Você ainda não salvou nenhum filme :(</p>}
            <ul>
                {filmes.map((filme)=>{
                    return(
                        <li key={filme.id}>
                            <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/filme/${filme.id}`}><h2>{filme.title}</h2></Link>
                            <button onClick={()=>deleteFilme(filme.id)}>Excluir dos Favoritos</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos