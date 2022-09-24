import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import './detalhes.css'
import {toast} from 'react-toastify'

function Filme(){
    const {id} = useParams()
    const navigate = useNavigate()
    const [filme, setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                api_key:"d3fc50ed5ecdd5b16ace068dabb49f9d",
                language: "pt-BR"
                }
            })
            .then((res)=>{
                setFilme(res.data)
                setLoading(false)
            }).catch(()=>{
                console.log("Filme não existente")
                navigate('/', {replace: true})
                return
            })
        }
        loadFilme()

        return ()=>{
            console.log('componente desmontado')
            
        }
    }, [navigate, id])

    if(loading){
        return(
        <div className='loading'>
            <h1>Carregando Detalhes...</h1>
        </div>
        )
    }

    function saveMovie(){
        const myList = localStorage.getItem('@primeflix')

        let movieSaves = JSON.parse(myList) || []

        const hasMovie = movieSaves.some((singleMovie)=> singleMovie.id === filme.id)
        if(hasMovie){
            toast.warn('ERRO! ESSE FILME JÁ ESTÁ SALVO NA SUA LISTA!')
            return
        }else{
            movieSaves.push(filme)
            localStorage.setItem("@primeflix", JSON.stringify(movieSaves))
            toast.success("FILME SALVO NA SUA LISTA COM SUCESSO!")
        }
    }
    return(
        <div className='filme-info' style={{backgroundImage: `url(http://image.tmdb.org/t/p/original/${filme.backdrop_path})`}}>
            <div className='conteiner-detalhes'>
                <div className='infos'>
                    <div className='img'>
                        <img src={`http://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                    </div>
                    <div className='info-geral'>
                        <h1>{filme.title} - ({filme.release_date.slice(0,4)})</h1>
                        <h2>Sinopse:</h2>
                        <p>{filme.overview}</p>
                        <h3>Avaliação: {filme.vote_average} / 10</h3>
                        <div className='buttons'>
                            <button onClick={saveMovie}>Salvar</button>
                            <a href={`https://www.youtube.com/results?search_query=${filme.title} Trailer`} target="blank" rel='external'><button>Trailer</button></a>
                        </div>
                        <div className='genero'>
                            <h3>Gênero: </h3>
                            {filme.genres.map((genero)=>{
                                return(
                                    <p key={genero.id}>{genero.name}</p>  
                                )
                            })}
                        </div>
                        
                        <div className='companies'>
                            {filme.production_companies.map((companias)=>{
                                return(
                                    <div className='box-companias' key={companias.id}>
                                        <img src={`http://image.tmdb.org/t/p/original/${companias.logo_path}`} alt={companias.name}/>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Filme