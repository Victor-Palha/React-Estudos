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
    </div>
)
}
export default Events