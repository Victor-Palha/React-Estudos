import {useState, useEffect} from 'react'
import api from '../../services/api'
//URL: https://api.themoviedb.org/3/movie/now_playing?api_key=d3fc50ed5ecdd5b16ace068dabb49f9d&language=pt-BR

function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing",{params:{
                api_key:"d3fc50ed5ecdd5b16ace068dabb49f9d",
                language: "pt-BR",
                page: 1
            }
        })
        console.log(response.data.results)
        }
        loadFilmes()
    }, [])
    return(
        <session>
            <h1>Home</h1>
        </session>
    )
}
export default Home