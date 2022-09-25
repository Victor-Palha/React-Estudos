const Events = () =>{
    const handleMyEvent = (e)=>{
        console.log(e)
        alert("Evento ativado")
    }
return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={()=>alert("Arrow Function")}>Clique aqui também</button>
        </div>
    </div>
)
}
export default Events