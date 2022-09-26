import {useState} from "react"
const ManageData = ()=>{
    const [name, setName] = useState("João")
    return(
        <>
            <p>Value: {name}</p>
            <button onClick={()=> setName("Victor")}>Click here!</button>
        </>
    )
}
export default ManageData