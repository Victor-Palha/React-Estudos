const Challenge = ()=>{
    const n1 = 10
    const n2 = 15
    const handleSum = (x, y)=>{
            const sum = x+y 
            alert(sum)
    }
    return(
        <>
            <p>a: {n1}</p>
            <p>b: {n2}</p>
            <button onClick={()=>handleSum(n1, n2)}>Soma</button>
        </>
    )
}
export default Challenge