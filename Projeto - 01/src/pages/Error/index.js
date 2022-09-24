import './error.css'
import {Link} from 'react-router-dom'

function Error(){
    return(
        <div className="e404">
            <h1>ERROR 404: PÁGINA NÃO ENCONTRADA! :c </h1>
            <Link to='/'>Voltar para o Menu</Link>
        </div>
    )
}
export default Error