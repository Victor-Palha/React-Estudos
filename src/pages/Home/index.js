import {useState, useEffect} from 'react'
import api from '../../services/api'
import {Link} from 'react-router-dom'
import './home.css'


//URL: https://api.themoviedb.org/3/movie/now_playing?api_key=d3fc50ed5ecdd5b16ace068dabb49f9d&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{params:{
                api_key:"d3fc50ed5ecdd5b16ace068dabb49f9d",
                language: "pt-BR",
                page: 1
            }
        })
        //console.log(response.data.results.slice(0, 10))
        setFilmes(response.data.results.slice(0,20))
        setLoading(false)
        }
        loadFilmes()
    }, [])
    if(loading){
        return(
            <div className='loading'>
                <h1>Carregando Filmes...</h1>
            </div>
        )
    }
    return(
            <div className='conteiner'>
                <div className='lista-filmes'>
                    {filmes.map((filme)=>{
                        return(
                            <article key={filme.id}>
                                
                                <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                                <h1><Link to={`/filme/${filme.id}`}>{filme.title}</Link></h1>
                                
                            </article>
                        )
                    })}
                </div>
            </div>
    )
}
export default Home