// Base da URL: https://api.themoviedb.org/3/
// URL: https://api.themoviedb.org/3/movie/now_playing?api_key=d3fc50ed5ecdd5b16ace068dabb49f9d&language=pt-BR
import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

})

export default api