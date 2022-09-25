const Events = () =>{
    const handleMyEvent = (e)=>{
        console.log(e)
        alert("Evento ativado")
    }
    const renderSomething = (x) =>{
        if(x){
            return <h1>Render this</h1>
        }else{
            return <h1>Or render this</h1>
        }
    }
return(
    <div>
        <div>
            <button onClick={handleMyEvent}>Clique Aqui</button>
        </div>
        <div>
            <button onClick={()=>alert("Arrow Function")}>Clique aqui também</button>
        </div>
        {renderSomething(false)}
    </div>
)
}
export default Events